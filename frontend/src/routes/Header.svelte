<svelte:head>
    <title>SOS2223-jul-acv</title>
</svelte:head>
<main>
    <nav>
        <div class="container">            
            <a  id="inicio" href="/">Inicio</a>
            <a href="/hotel-occupancy-surveys">Encuesta de ocupación hotelera</a>
            <a href="/integrations">Usos/Integraciones</a>
            <a href="/about">Vídeo</a>
            <a  id="inicio" href="/analytics">Gráfica conjunta</a>
            <a href="/graph/hotel-occupancy-surveys">Gráfica ocupación de hoteles</a>          
        </div>
    </nav>
</main>
<style>
    #inicio{
        margin-top: 15px;
    }   
    a {
        color : rgb(16, 16, 17);
        text-decoration: none;
        font-size: 21px;
        padding-top: 20px;
        margin-left: 10px;
        text-align: center; 
             
    }
    main{
        margin-top: 20px;
        position: relative;
        height: 200px;

    }
    .container {
        width: 1200px;
        height: 200px;
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: 20% 20% 20% 20% 20%;
        border-style: solid;
        border-width: 3px;
    }
</style>