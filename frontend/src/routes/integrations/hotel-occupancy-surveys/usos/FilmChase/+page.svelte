<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { Table } from "sveltestrap";
    import axios, { formToJSON } from 'axios';

    onMount(async () => {
        getFilmChase();
    });

    let datos = [];

    async function getFilmChase() {
        const options = {
        method: 'GET',
        url: 'https://film-chase1.p.rapidapi.com/films',
        params: {
            items: '20',
            page: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'cabc8ff376msh5464a7ba2e23576p108b12jsn68f28b207567',
            'X-RapidAPI-Host': 'film-chase1.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            datos = response.data;
        } catch (error) {
            console.error(error);
        }
    }


</script>

<main>
    <h3 align="center"><u>Film Chase</u></h3>
        <p style="text-align:center">
            Datos de: <a
                style="text-decoration: none; color:black"
                href="https://rapidapi.com/filmchase/api/film-chase1"
                target="_blank"><u>Film Chase</u></a
            >
        </p>
    <br>
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>ID en IMDB</th>
                <th>Año de lanzamiento</th>
                <th>Duración</th>
            </tr>
        </thead>
        <tbody>
            {#each datos as dato}
                <tr>
                    <td>{dato["id"]}</td>
                    <td>{dato["original_title"]}</td>
                    <td>{dato["imdb_id"]}</td>
                    <td>{dato["release_year"]}</td>
                    <td>{dato["runtime"]}</td>
                </tr>
            {/each}
            <br>
        </tbody>
    </Table>

</main>