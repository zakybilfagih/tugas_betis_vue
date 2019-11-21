<template>
    <header>
        <div class="header__toggles">
            <div class="header__navlogo">
                <router-link to="/">BETIS 2020</router-link>
            </div>
            <div class="header__navtoggle">
                <button @click="navtoggle = !navtoggle">☰</button>
            </div>
        </div>
        <nav v-show="navtoggle">
            <ul>
                <li>
                    <router-link to="/">About Us</router-link>
                </li>
                <li>
                    <router-link to="/about">Profile</router-link>
                </li>
                <li>
                    <router-link to="/about">Subjects</router-link>
                </li>
                <li>
                    <router-link to="/about">Login</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data: function () {
        return {
            navtoggle: false,
        }
    },
    mounted() {
        if (window.innerWidth > 750) {
            this.navtoggle = true
        } else {
            this.navtoggle = false
        }

       window.addEventListener('resize', () => {
           this.navtoggle = false

           if (innerWidth > 750) {
               this.navtoggle = true
           }
       })
    }
}
</script>

<style lang="scss" scoped>
    $base-color: #024059;
    $sec-color: #F2BC1B;

    a {
        text-decoration: none;
        color: $base-color;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 20px;
    }

    header {
        background: $sec-color;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: center;
        padding: 1.3em 2em;
        min-height: 29px;

        nav {
            margin-top: 1em;
        }
    }

    .header__navtoggle {
        display: block;

        button {
            border: none;
            background: none;
            font-size: 24px;
            font-weight: bold;
            color: $base-color;
        }
    }

    .header__toggles {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column
    }

    li {
        margin-bottom: 0.75em;
    }

    @media only screen and (min-width: 750px) {
        .header__navtoggle {
            display: none;
        }

        header {
            flex-direction: row;
            align-content: flex-end;
            align-items: center;

            nav {
                margin-top: 0;
            }
        }

        ul {
            flex-direction: row;
        }

        li {
            margin-left: 2em;
            margin-bottom: 0em;
        }
    }
</style>