const image_input = document.querySelector('#image_input');
  const display_image = document.querySelector('#display_image');

  image_input.addEventListener('change', function() {
    console.log(image_input)
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        display_image.style.backgroundImage = `url(${this.result})`;
      });

      reader.readAsDataURL(file);
    }
  });