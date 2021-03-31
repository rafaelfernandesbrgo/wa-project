import styled from 'styled-components';

export const Container = styled.table`
  border-spacing: 0;
  table-layout: fixed;
  padding: 16px;

  tr {
    text-align: left;
    background-color: #f7f7f7;


    th {
      height: 50px;
      border-bottom: 1px solid #ddd;
      color: #3F1FFF;

    }

    td {
      border-bottom: 1px solid #ddd;
    }

    td:first-child{
      padding-left:10px;
    }
    th:first-child{
      padding-left:10px;
    }
  }



  tr:hover {
    opacity: 0.7;

  }

  thead tr:first-child:hover {
    opacity: 1;
  }

  #td-action {
    button {
      padding: 4px 8px;
    }
  }
`;
