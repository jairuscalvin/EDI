export default function DataTable(data) {
    return(
        <div>
            <table>
                <tr>
                    <th>Employee</th>
                    <th>No Barang</th>
                    <th>Nama Barang</th>
                    <th>harga</th>
                    <th>diskon</th>
                    <th>total</th>
                </tr>
                <tr>
                    <td>{data.user}</td>
                    <td>{data.no_barang}</td>
                    <td>{data.nama_barang}</td>
                    <td>{data.harga}</td>
                    <td>{data.diskon}</td>
                    <td>{data.total}</td>
                </tr>
            </table>
        </div>
    )
}