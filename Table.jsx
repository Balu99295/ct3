export default function Table() {
  const data = [{ name: 'John Doe', role: 'Admin' }];
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-700">
          <th className="p-2">Name</th>
          <th className="p-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t dark:border-gray-600">
            <td className="p-2">{row.name}</td>
            <td className="p-2">{row.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
