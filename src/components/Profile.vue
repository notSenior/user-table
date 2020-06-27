<template>
    <div v-if="error">
        <h1>User is not found</h1>
    </div>
    <div v-else class="mdl-grid">
        <div class="mdl-grid mdl-cell mdl-cell--6-col mdl-cell--3-offset">
            <div class="frame mdl-cell mdl-cell--3-col mdl-card mdl-shadow--2dp">
                <img class="avatar" :src="user.avatar">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                subscribe
                </button>
            </div>
            <div class="mdl-cell mdl-cell--8-col mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">{{user.first_name + " "+ user.last_name}}</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </div>
                <div class="mdl-card__supporting-text">
                    {{user.email}}
                </div>
                <div class="mdl-card__actions mdl-card--border"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .avatar{
        width: 100%;
        border-radius: 24px;
    }
    .frame>button{
        margin-top: 20px;
        width: 100%;
    }
    .frame{
        padding: 20px;
    }
</style>



<script>
import axios from "axios"

export default {
    data(){
        return {
            error: false,
            user: {}
        }
    },
    methods:{
        getUser(){
            axios.get("https://reqres.in/api/users/"+this.$route.params.id).then(res=> this.user = res.data.data)
            .catch(error=> {
                this.error = true
                console.log(error);
            });
        }
    },
    mounted(){
        this.getUser()
    }
}
</script>