const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante lorem. Integer vel vehicula mi, vel interdum odio. Proin fermentum, sem vitae laoreet bibendum, odio eros sodales ligula, id varius risus justo sit amet enim.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum bibendum massa nec leo accumsan, eu ultricies neque fermentum. Cras nec dui ullamcorper, tempor lorem sed, convallis nunc.",
    "Fusce ullamcorper purus eu odio tincidunt, a tempor elit varius. Morbi luctus enim vitae mi vulputate, eget euismod nunc luctus. Ut aliquam euismod metus, at tristique lectus volutpat ac.",
    "Donec ultricies justo nec enim tristique, sed rutrum ipsum elementum. Maecenas mattis, velit non tempus aliquet, libero lacus vestibulum justo, id malesuada ante sem at libero.",
    "Nullam a mi id sem cursus auctor. Ut malesuada eros a risus posuere, eget eleifend nisl ultrices. Maecenas non volutpat magna, eget pharetra orci.",
    "Vestibulum aliquam ligula id purus cursus congue. Ut in ultricies metus, at dapibus neque. Nulla facilisi. Proin ac tellus quis enim ullamcorper dictum.",
    "Suspendisse id mi eu sapien fermentum hendrerit. Nulla facilisi. Vivamus laoreet libero sit amet elit lacinia, sit amet sagittis libero rhoncus.",
    "Sed eget mauris id libero tristique gravida. Mauris pharetra suscipit efficitur. Morbi volutpat ligula ac lacinia luctus.",
    "Maecenas scelerisque, eros nec aliquet ultricies, nisl risus vehicula lorem, at lacinia quam purus sit amet mi.",
    "Vestibulum eget velit a lorem aliquet fermentum. Ut consectetur velit eget magna suscipit, ac ullamcorper turpis varius.",
    "Cras placerat pellentesque felis, a posuere lacus tincidunt ac. Duis nec quam at ante convallis condimentum.",
    "Fusce quis leo volutpat, sodales sapien id, blandit lorem. Vivamus luctus dictum urna, at gravida leo vulputate a.",
    "Nullam ac rhoncus nulla, eget vulputate enim. Nulla facilisi. Praesent fermentum, sem nec ultrices condimentum, nisi turpis dapibus elit, vel efficitur sem nulla et ligula.",
    "Aliquam erat volutpat. Cras viverra luctus eros, eget cursus quam vehicula nec. Nulla facilisi.",
    "Nunc sed lacus nec orci luctus consequat. Sed consequat, arcu et vehicula placerat, arcu quam lacinia urna, vel laoreet nulla odio nec nulla.",
    "Pellentesque a velit nec ex interdum faucibus. Mauris suscipit nibh vel mauris sollicitudin feugiat. Phasellus vitae nunc at magna viverra laoreet.",
    "In gravida lorem id sem dignissim, in consequat ipsum mattis. Cras vitae libero nec mi consequat rutrum. Nullam scelerisque enim id purus condimentum, eget placerat ligula aliquam.",
    "Proin nec consequat nulla, vitae sodales odio. Integer pretium sodales efficitur. Aliquam nec mi ut quam pharetra volutpat.",
    "Quisque vel arcu vitae nunc accumsan sollicitudin. Aliquam erat volutpat. Ut fringilla, arcu nec blandit dignissim, quam leo venenatis sapien, eu commodo justo purus sit amet turpis.",
    "Nam volutpat justo et enim consectetur, vitae congue est ultricies. Mauris a mi sed augue rhoncus facilisis. Suspendisse eget felis est.",
    "Phasellus tempus massa sed justo ultricies, non feugiat felis efficitur. Sed vel luctus ipsum. Integer in urna vitae nulla dapibus commodo.",
    "Morbi nec mauris at mi vestibulum gravida. Duis convallis ipsum non felis eleifend, sed hendrerit metus dictum.",
    "Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Vivamus lobortis nunc id lacus cursus, euismod ultricies ipsum congue. Vestibulum vulputate orci vel sem fermentum commodo.",
    "Fusce interdum, purus in tincidunt semper, lectus ligula tincidunt leo, sit amet cursus lorem nibh et dui. Nam laoreet varius enim, vel fermentum erat suscipit quis.",
    "Curabitur varius fringilla justo, vitae efficitur sapien. Proin sit amet turpis sit amet nulla dictum hendrerit. Sed dapibus sit amet metus nec mattis.",
    "Sed ac nisi ut tortor feugiat egestas eget vel ex. Donec eu arcu nec elit lobortis vehicula nec in purus.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nec velit eu velit commodo posuere.",
    "Morbi vestibulum massa vel arcu faucibus, quis hendrerit ipsum convallis. In volutpat velit a vestibulum iaculis.",
    "Sed lobortis metus in eros aliquet congue. Maecenas nec nulla a risus placerat malesuada.",
    "Integer nec velit ac arcu consectetur consectetur. In hac habitasse platea dictumst. Nullam rutrum ex sit amet velit malesuada vestibulum.",
    "Proin nec lorem eget libero tristique tempor id et velit. Curabitur sit amet vestibulum lorem, nec cursus dui."
  ];
  
const item = document.getElementById("items");
const datacontainer = document.getElementById("data");

function generate() {
  if (item.value == 0) {
    alert("The Value cannot be zero");
  } else{
    // datacontainer.innerHTML = " ";
    for (let i = 0; i < item.value; i++) {
      let limit = paragraphs.length;
      let random = Math.floor(Math.random() * limit);
      datacontainer.innerHTML += `
      <p>${paragraphs[random]}</p>
      `
    }
  }
}
