import { useFetch } from "../hook/useFetch"
import { useEffect } from "react"


export const FetchApp = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET')

    }, []);


    return (
        <>

            {isLoading
                ? <h4>Cargando...</h4>
                : error ? <h4>Ha ocurrido un error</h4>
                    :

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Empresa</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>

                                        </tr>
                                    )

                                })
                            }




                        </tbody>
                    </table>

            }

        </>
    )
}
