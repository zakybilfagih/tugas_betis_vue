<template>
    <div class="sidebar">
        <div class="container">
            <nav>
                <h1>test</h1>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data: function () {
        return {
            subject: {
                'Saintek': {

                },
                'Soshum' : {

                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        background: $pale-green;
    }

    .container {
        width: 90%;
        margin: 2em auto;
    }
</style>