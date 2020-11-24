<template>
    <footer>
        <p>Vue test - <a href="http://pedro.e-forma.pt/">Pedro Matias @2020</a></p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background: #111;
        color: #42b983;
        padding: 1.5rem;

        a {
            color: #42b983;
            &:hover{
                color: #fff;
            }
        }
    }
</style>