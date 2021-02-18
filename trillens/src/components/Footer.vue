<template>
  <div>
    <form>
      <label>Newsletter</label><br />
      <input type="text" name="fname" value="Ingresa tu E-mail" />
      <input type="submit" value="Submit" />
    </form>

    <div class="redes-svg">
      <div>YT</div>
      <div>IG</div>
      <div>FB</div>
      <div>TW</div>
      <div>TW</div>
      <div>DS</div>
    </div>

    <div class="href-footer">
      <div>Videos</div>
      <div>Blog</div>
      <div>Podcast</div>
    </div>

    <div class="logo-footer">
      <div class="logo-footer-mensaje">
        Este es mi blog personal, donde juntos compartimos nuestras vivencias
        para convertirlas en sabiduria que ayude a otros.
      </div>
      <div class="logo-footer-foto">
        Jussmor
      </div>
    </div>

    <div class="politicas-footer">
      <div class="politicas-copy">&#169; 2021 Jussmor</div>
      <div class="politicas-privacy">Politica de privacidad</div>
      <div class="politicas-uso">Terminos de uso</div>
      <div class="politicas-contacto">Conctacto</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.redes-svg {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 50px;

  .redes-svg div:nth-child(1) {
    grid-column: 1/4;
    grid-row: 1 / 4;
  }
  .redes-svg div:nth-child(2) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
}

.href-footer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 50px;
  grid-gap: 10px;
}

.logo-footer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);

  .logo-footer-mensaje {
    grid-column: 1 / 5;
    grid-row: 1;
  }
  .logo-footer-foto {
    grid-column: 1;
    grid-row: 2 / 2;
  }
}

.politicas-footer {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);

  .politicas-copy {
    grid-column: 1 / 5;
    grid-row: 1;
  }
  .politicas-privacy {
    grid-column: 1 / 3;
    grid-row: 2;
  }
  .politicas-uso {
    grid-column: 3 / 5;
    grid-row: 2;
  }
  .politicas-contacto {
    grid-column: 5 / 7;
    grid-row: 2;
  }
}
</style>
