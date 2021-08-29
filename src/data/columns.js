export const COLUMNS = [
  {
    Header: 'stranka',
    columns: [
      {
        Header: 'id',
        accessor: 'address.id',
      },
      {
        Header: 'street no.',
        accessor: 'address.streetNo',
      },
      {
        Header: 'street',
        accessor: 'address.street',
      },
      {
        Header: 'city',
        accessor: 'address.city',
      },
      {
        Header: 'post',
        accessor: 'address.post',
      },
      {
        Header: 'post no.',
        accessor: 'address.postNo',
      },
    ],
  },
  {
    Header: 'internet',
    columns: [
      {
        Header: 'value',
        accessor: 'services[0].value',
        sortType: 'basic',
        Cell: ({ cell: { value } }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'comment',
        accessor: 'services[0].comment',
      },
    ],
  },
  {
    Header: 'telefon',
    columns: [
      {
        Header: 'value',
        accessor: 'services[1].value',
        sortType: 'basic',
        Cell: ({ cell: { value } }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'comment',
        accessor: 'services[1].comment',
      },
    ],
  },
  {
    Header: 'televizija',
    columns: [
      {
        Header: 'value',
        accessor: 'services[2].value',
        sortType: 'basic',
        Cell: ({ cell: { value } }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'comment',
        accessor: 'services[2].comment',
      },
    ],
  },
];
