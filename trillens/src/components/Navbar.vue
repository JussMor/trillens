<template>
  <div>
    <nav class="grid">
      <ul>
        <li class="fullwidth"><a href="/videos">Videos </a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/podcast">Podcast</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/">Fb</a></li>
        <li><a href="/">TW</a></li>
        <li><a href="/">IG</a></li>
        <li><a href="/">YT</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
nav.grid {
  background-color: aquamarine;

  ul {
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-gap: 10px;
    min-height: 70px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    list-style: none;
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;

    a {
      text-decoration: none;
    }

    @media (min-width: 600px) {
      grid-template-columns: repeat(8, fit-content(50px));
      grid-gap: 20px;
      justify-items: end;
    }
  }

  /*     .fullwidth {
        grid-column: 1 / 4;

        @media (min-width: 600px){
            grid-column: 1 / 2;
            justify-self: end;
        }
    } 
 */
}
</style>
