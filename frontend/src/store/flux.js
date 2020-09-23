const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      projects: [{}],
      scopes: [{}],
      pointsSize: [{}],
      totalPoints: 0,
      capabilities: [{}],
      resources: [
				
        {	'duration': 10,
          'projectName': 'white'}
				
      ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, 'green');
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
        */

       const store = getStore();

        fetch(
          'https://bah-pm-dashboard-backend.herokuapp.com/resources'
        )
          .then(response => {
            if (response.status !== 200) {
              alert('Connection error, status ' + response.status);
              console.log(response);
              return;
            }
            response.json().then(data => {
              console.log(data);
              
              
              console.log(store);
              setStore({ projects: data.items });
            });
          })
          .catch(err => {
            alert('Fetch error: ', err);
          });
      },
      loadCapabilities: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
        */

       const store = getStore();

        fetch(
          'https://bah-pm-dashboard-backend.herokuapp.com/capabilities'
        )
          .then(response => {
            if (response.status !== 200) {
              alert('Connection error, status ' + response.status);
              console.log('Capabilitites: ' + response);
              return;
            }
            response.json().then(data => {
              console.log('Capabilitites: ' + data);
              
              
              console.log(store);
              setStore({ capabilities: data.items });
            });
          })
          .catch(err => {
            alert('Fetch error: ', err);
          });
      },

      loadScopes: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
        */

       const store = getStore();

        fetch(
          'https://bah-pm-dashboard-backend.herokuapp.com/scopes'
        )
          .then(response => {
            if (response.status !== 200) {
              alert('Connection error, status ' + response.status);
              console.log(response);
              return;
            }
            response.json().then(data => {
              console.log(data);
              
              
              console.log(store);
              setStore({ scopes: data.items });
            });
          })
          .catch(err => {
            alert('Fetch error: ', err);
          });
      },

      loadPointsSizes: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
        */

       const store = getStore();

        fetch(
          'https://bah-pm-dashboard-backend.herokuapp.com/future_capabilities'
        )
          .then(response => {
            if (response.status !== 200) {
              alert('Connection error, status ' + response.status);
              console.log(response);
              return;
            }
            response.json().then(data => {
              console.log(data);
              
              
              console.log(store);
              setStore({ pointsSize: data.items });
            });
          })
          .catch(err => {
            alert('Fetch error: ', err);
          });
      },


      loadTotalPoints: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
        */

       const store = getStore();

        fetch(
          'https://bah-pm-dashboard-backend.herokuapp.com/scopes'
        )
          .then(response => {
            if (response.status !== 200) {
              alert('Connection error, status ' + response.status);
        
              return;
            }
            response.json().then(data => {
              console.log(data);
              
              setStore({ totalPoints: data.items[8].points});
              console.log(store.totalPoints);
            });
          })
          .catch(err => {
            alert('Fetch error: ', err);
          });
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      


      createResource: (
        duration,
        projectName,
        resourceName,
        status
      ) => {
        const store = getStore();
        const endpoint =
					'https://bah-pm-dashboard-backend.herokuapp.com/resources';

  
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
            duration: duration,
            projectName: projectName,
            resourceName: resourceName,
            status: status,
          })
        })
          .then(function(response) {
            
            return response.json();
            
          })
          .then(res => {
            fetch(
              'https://bah-pm-dashboard-backend.herokuapp.com/resources'
            )
              .then(response => {
                if (response.status !== 200) {
                  alert(
                    'Connection error, status ' +
											response.status
                  );
                  return;
                }
                response.json().then(data => {
                  const store = getStore();
                  store.projects = data;
                  setStore({ store });
                  window.location.reload(false);
                });
              })
              .catch(err => {
                alert('Fetch error: ', err);
              });
          })

          .catch(err => {
            alert('Fetch error: ', err);
          });
      },

      createCapability: (
     
        length,
        name,
        number,
        size,
        status,
        dependency
        
      ) => {
        const store = getStore();
        const endpoint =
					'https://bah-pm-dashboard-backend.herokuapp.com/capabilities';

  
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
          
            length: length,
            name: name,
            number: number,
            size: size,
            status: status,
            dependancy: dependency

            
          })
        })
          .then(function(response) {
            
            return response.json();
          })
          .then(res => {
            fetch(
              'https://bah-pm-dashboard-backend.herokuapp.com/capabilities'
            )
              .then(response => {
                if (response.status !== 200) {
                  alert(
                    'Connection error, status ' +
											response.status
                  );
                  return;
                }
                response.json().then(data => {
                  const store = getStore();
                  store.capabilities = data;
                  setStore({ store });
                  window.location.reload(false);
                });
              })
              .catch(err => {
                alert('Fetch error: ', err);
              });
          })

          .catch(err => {
            alert('Fetch error: ', err);
          });
      },

      createScope: (
     
        points
        
      ) => {
        const store = getStore();
        const endpoint =
					'https://bah-pm-dashboard-backend.herokuapp.com/scopes';

        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
          
            points: points,
           
            
          })
        })
          .then(function(response) {
            return response.json();
          })
          .then(res => {
            fetch(
              'https://bah-pm-dashboard-backend.herokuapp.com/scopes'
            )
              .then(response => {
                if (response.status !== 200) {
                  alert(
                    'Connection error, status ' +
											response.status
                  );
                  return;
                }
                response.json().then(data => {
                  const store = getStore();
                  store.scopes = data;
                  setStore({ store });
                  window.location.reload(false);
                });
              })
              .catch(err => {
                alert('Fetch error: ', err);
              });
          })

          .catch(err => {
            alert('Fetch error: ', err);
          });
      },

      updatePoints: (
     
        capabilities,
        size
        
      ) => {
        const store = getStore();
        const endpoint =
					'https://bah-pm-dashboard-backend.herokuapp.com/future_capabilities/' + size;

  
        fetch(endpoint, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify({
          
            capabilities_count: capabilities,
            id: size,
            

            
          })
        })
          .then(function(response) {
            
            return response.json();
          })
          .then(res => {
            fetch(
              'https://bah-pm-dashboard-backend.herokuapp.com/future_capabilities'
            )
              .then(response => {
                if (response.status !== 200) {
                  alert(
                    'Connection error, status ' +
											response.status
                  );
                  return;
                }
                response.json().then(data => {
                  const store = getStore();
                  store.pointsSize = data;
                  setStore({ store });
                  window.location.reload(false);
                });
              })
              .catch(err => {
                alert('Fetch error: ', err);
              });
          })

          .catch(err => {
            alert('Fetch error: ', err);
          });
      },


    }
  };
};

export default getState;