<script>
    import { Button } from "sveltestrap";

    async function watchVideoHotel(){
        window.location.href = "https://drive.google.com/file/d/1CBucp58iphBnhHUW0F7yT7qGwdL8To9G/view?usp=sharing";
    }

</script>
<main>
    <div class="container">
        <div class="photo-block" style="margin-left: 20px;">
            <div class="photo-image-block">
                <img src = "https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-videologoplayicon-3993847_112649.png" alt="Imagen" style="width: 280px; height: 350px; margin-top:25px; margin-bottom:25px; ">
            </div>
            <div>
                <h4>Ocupación de hoteles</h4>
            </div>
            <div id="boton"  style="margin-top: 20px">
                <Button color="dark" on:click={watchVideoHotel}>Ver vídeo</Button>
            </div>
        </div>  
   </div> 
</main>
<style>
    .container{
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }
    div.photo-block {
        text-align: center;
        border: 1px solid gray;
        border-radius: 5%;
        height: 500px;
    }
    img {
        max-height: 400px;
        width: auto;
    }
</style>