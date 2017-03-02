<template>
    <div>
        <header class="header">
            <div class="container header__container">
                <h1 class="header__title">Vuespeedie</h1>
                <navigation></navigation>
            </div>
        </header>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>