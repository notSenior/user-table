<template>
    <div class="mdl-grid">
        <table class="mdl-data-table mdl-js-data-table mdl-cell mdl-cell--6-col mdl-cell--3-offset">
        <thead>
            <tr>
            <th class="mdl-data-table__cell--non-numeric">Id</th>
            <th class="mdl-data-table__cell--non-numeric">Avatar</th>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th class="mdl-data-table__cell--non-numeric">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
            <td class="mdl-data-table__cell--non-numeric">{{user.id}}</td>
            <td class="mdl-data-table__cell--non-numeric">
                <img class="avatar" :src="user.avatar">
            </td>
            <td class="mdl-data-table__cell--non-numeric">
                <router-link :to='{ path: "/profile/"+user.id }'>
                    {{user.first_name + " "+ user.last_name}}
                </router-link>
            </td>
            <td class="mdl-data-table__cell--non-numeric">{{user.email}}</td>
            </tr>
        </tbody>
        </table>
        <div class="mdl-cell mdl-cell--6-col mdl-cell--3-offset" v-show="isLoading">
            <div class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        </div>
        <button v-show="!isLastUser && !isLoading" @click="loadUsers" class="mdl-cell mdl-cell--6-col mdl-cell--3-offset mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            Load users
        </button>
    </div>
</template>

<style scoped>
    .avatar{
        width: 48px;
        height: 48px;
        border-radius: 24px;
    }
    .mdl-progress{
        width: auto;
    }
</style>

<script>
import axios from "axios"

export default {
    data(){
        return {
            isLoading: false,
            isLastUser: false,
            page: 0,
            users: []
        }
    },
    methods:{
        loadUsers(){
            this.isLoading = true
            this.page++
            axios.get('https://reqres.in/api/users?page='+this.page+"&delay="+ Math.random()+1).then(response => {
                this.users = this.users.concat(response.data.data)
                if (response.data.page * response.data.per_page >= response.data.total)
                    this.isLastUser = true
                this.isLoading = false
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted() {
        if(window.componentHandler)
            window.componentHandler.upgradeAllRegistered()
        this.loadUsers()
    }
}
</script>