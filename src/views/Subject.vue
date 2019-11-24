<template>
<div class="subject">
    <div class="container">
        <h1>{{ getData['nama'] }}</h1>
        <div class="item">
            <div class="video" v-if="getData['video']">
                <iframe v-for="(video,i) in getData['video']" :key="i" :src="video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="link" v-if="getData['link']">
                <ul>
                    <li v-for="(link, j) in getData['link']" :key="j">
                        <img src="../assets/img/pdf.svg" alt="">
                        <a :href="'https://' + link['link']">{{ link['nama'] }}</a>
                    </li>
                </ul>
            </div>
            <div class="imagecont" v-if="getData['gambar']">
                <div v-for="(gambar, k) in getData['gambar']" :key="k" class="image">
                    <img class="imageitem" :src="require('../assets/img/' + gambar['file'])" :alt="gambar['nama']" />
                    <p class="imagecapt">{{ gambar['nama'] }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'subject',
    data() {
        return {
            sub_info: {},
        }
    },
    computed: {
        subjects() { return Object.keys(this.$store.state.subjects) },
        getParams() { return this.$route.params.id },
        getData() { return this.$store.getters.getSub(this.subjects[this.getParams[0]],this.getParams[2]) }
    }
}
</script>

<style lang="scss" scoped>
    h1, li, p {
        font-family: 'Roboto';
        color: $base-color;
    }

    li {
        list-style: none;
        font-size: 1.4em;
        display: flex;
        align-items: center;

        > * {
            margin-left: 1em;
        }
    }

    a {
        text-decoration: none;
        color: $base-color;
    }

    p {
        font-size: 1.6em;
    }

    h1 {
        font-weight: 500;
        font-size: 1.6em;
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    .imageitem {
        max-height: 300px;
        max-width: 300px;
        height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .image {
        width: 100%;
        display: flex;
        flex-direction: column;

        > * {
            margin-bottom: 2em;
        }
    }

    .imagecont {
        width: 100%;
    }

    .subject {
        flex-grow: 1;
        flex-shrink: 0;
    }

    .video {
        height: 300px;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        margin-top: 2em;
        display: flex;
        flex-direction: column;

        > * {
            margin-bottom: .5em;
        }
    }

    .item {
        display: flex;
        flex-direction: column;

        > * {
            margin-bottom: 2em;
        }
    }

    .link ul {
        > * {
            margin-bottom: 20px;
        }
    }

    @media only screen and (min-width: 750px) {
        div {
            width: 450px;
        }

        .item {
            width: 100%;
        }

        .video {
            margin-left: auto;
            margin-right: auto;
        }

        .imageitem {
            max-height: 450px;
            max-width: 450px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
