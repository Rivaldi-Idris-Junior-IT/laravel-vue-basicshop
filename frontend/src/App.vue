<template>
   <div>
    <HeaderComponent />
        <router-view />
    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from '@/components/Header'
  import FooterComponent from '@/components/Footer'

  export default {
    name: 'AppComponent',

    components: {
      HeaderComponent,
      FooterComponent
    }
  }

</script>
