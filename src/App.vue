<template>
  <div id="app">
    <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">{{$route.name}}</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
                <router-link class="mdl-navigation__link" to="/">Home</router-link>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
            </nav>
        </div>
    </header>
    <router-view/>
  </div>
</template>