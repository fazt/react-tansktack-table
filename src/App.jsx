import SimpleTable from "./components/SimpleTable";
import dayjs from "dayjs";
import data from './MOCK_DATA.json'

function App() {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "Mi ID",
    },
    // {
    //     header: 'Nombres y Apellidos',
    //    accessorFn: row => `${row.name} ${row.lastname}`
    // },
    {
      header: "Nombres Completos",
      columns: [
        {
          header: "Nombres",
          accessorKey: "name",
          footer: "Mi nombre",
        },
        {
          header: "Apellido",
          accessorKey: "lastname",
          footer: "Mi apellido",
        },
      ],
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Mi email",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "Mi pais",
    },
    {
      header: "Fecha de nacimiento",
      accessorKey: "dayOfBirth",
      footer: "Mi fecha de nacimiento",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];

  return (
    <div>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
}

export default App;
