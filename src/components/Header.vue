<template>
    <header>
        <h1>Countries Test</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    header{
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to bottom, #42b983 70%, #fff 30% );
        color: #fff;
        padding: 1.5rem;
        z-index: 1;
    }
</style>