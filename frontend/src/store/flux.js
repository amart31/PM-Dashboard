const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      projects: [{}],
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
                  store.products = data;
                  setStore({ store });
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
                });
              })
              .catch(err => {
                alert('Fetch error: ', err);
              });
          })

          .catch(err => {
            alert('Fetch error: ', err);
          });
      }


    }
  };
};

export default getState;