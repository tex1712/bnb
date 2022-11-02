<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">Home</router-link>
                <router-link class="btn nav-button" :to="{name: 'example2'}">Example 2</router-link>
            </div>
        </nav>
        <div class="container mt-4 mb-4 pr-4 pl-4">
            <router-view></router-view>
        </div>
    </div>
</template>