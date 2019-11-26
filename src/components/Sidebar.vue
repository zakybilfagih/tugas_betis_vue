<template>
    <div class="sidebar">
        <div class="container">
            <nav>
                <h3>Subjects</h3>
                <ul v-for="(subject,i) in Object.keys(subjects)" :key="i">
                    <li @click="sub_item.splice(i,1,!sub_item[i])" class="mainsub">
                        <span :style="[sub_item[i] ? {'transform': 'rotate(90deg)'} : {}]">play_arrow</span>
                        {{ subject }}
                    </li>
                    <ul v-if="sub_item[i]" class="subsub">
                        <li v-for="(item, j) in subjects[subject]['data']" :key="j"><router-link :to="`/subject/${i}_${j}`">{{ item['nama'] }}</router-link></li>
                    </ul>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    computed: {
        subjects() { return this.$store.state.subjects },
        sub_toggle() { return Array(Object.keys(this.$store.state.subjects).length).fill(false) }
    },
    data: function () {
        return {
            sub_item: [],
        }
    },
    created() {
        this.sub_item = this.sub_toggle
    }
}
</script>

<style lang="scss" scoped>
    h3, li{
        font-family: 'Roboto';
        font-weight: 500;
        color: $base-color;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: $base-color;
    }

    h3 {
        font-size: 1.6em;
        text-align: center;
    }

    .sidebar {
        background: $pale-green;
        display: flex;
    }

    .container {
        width: 80%;
        margin: 4em auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        width: 50%;
        > * {
            margin-bottom: 5px;
        }
    }

    ul > ul {
        display: block;
        font-size: 1.6em;
    }

    .subsub li {
        font-weight: normal;
        margin-left: 25%;
    }

    .mainsub {
        font-weight: 500;
        font-size: 1.6em;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    span {
        font-family: 'Material Icons';
        margin-right: 3px;
        margin-left: -8px;
        font-size: 36px;
        transition: transform 0.1s ease;
    }

    @media only screen and (min-width: 750px) {
        .container {
            display: block;
            margin: 2em auto;
            flex: none;
        }

        .subsub li {
            margin-left: 40%;
        }

    }
</style>