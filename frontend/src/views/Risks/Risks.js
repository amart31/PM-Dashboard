import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(risk, strategy, impact, date, status) {
  return { risk, strategy, impact, date, status };
}

const rows = [
  createData('Accuracy of Reports in CLM. IF data in CLM provided by FTs is not accurate and updated properly, THEN reports created may not reflect accuracy of current state and may cause issues for PI8 and beyond', 'Work with Scrum Masters and Tools team to identify pain points and create an effective method of data submission and reporting', 'Medium', '9/30/2020', 'O'),
  createData('Business Capabilities in CLM. IF backlog of capabilities is not analyzed and draft/inactive capabilities are not identified and reviewed, THEN there may be an impact to R1 delivery as capabilities may not have been properly prioritized for the remaining PIs', 'Work with Release Manager and Booz Allen counterpart to groom backlog, review capabilities and plan accordingly for the next PI. Identify capabilities in draft/incomplete state and review with the business to identify and confirm scope for R1', 'Medium', '9/15/2020', 'O'),
  createData('ECM Contractual Deliverable /nIF CLM records are not updated and maintained properly, THEN the ability to effectively generate and submit the program’s contractual deliverables may be adversely impacted.', 'Implement CLM QA activities (daily exception report query, Scrum Master QA checks, etc.) to ensure records are complete and accurate', 'Medium', '9/30/2020', 'Y'),
  createData('Delay in Resource Onboarding (MBI Clearance, GFE processing and IRS network access). IF the proposed Pega resources are not onboarded by August 31st, THEN completing PI 6 objectives on-time will be delayed resulting in increased scope for PI 7 that could further delay delivering R1', 'Collaborate with IRS ECM leadership and COR to expedite hardware/access requests on rolling basis as clearances are received. Escalate any delays immediately', 'Low', '8/31/2020', 'Y'),
  createData('Gap in Delivery after Release 1. IF the Release 2 plan and high-level capabilities are not finalized by mid September, THEN there is the risk of gap in delivery after Release 1', 'Continue to work with RIPS to streamline the Release 2 plan. Portfolio Team is working to break down the identified business processes(epics) into solution level capabilities', 'Medium', '9/15/2020', 'Y'),
  createData('Operations and Maintenance. IF the operations and maintenance for R1 and beyond is not planned by August 31st, THEN there is a risk to O&M post-deployment of R1', 'Work with the ECM SIS leadership to plan helpdesk, infrastructure support and post release application and platform support', 'Medium', '8/31/2020', 'G'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Risk Item</StyledTableCell>
            <StyledTableCell>Mitigation Strategy / Actions</StyledTableCell>
            <StyledTableCell>Impact</StyledTableCell>
            <StyledTableCell >Impact Date</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.risk}>
              <TableCell component="th" scope="row">
                {row.risk}
              </TableCell>
              <TableCell >{row.strategy}</TableCell>
              <TableCell >{row.impact}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}