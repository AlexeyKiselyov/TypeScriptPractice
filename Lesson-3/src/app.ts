const button = document.querySelector(".button") as HTMLButtonElement;

button.addEventListener("click", () => {
  console.log("Click");
  console.log("Next step1");
  console.log("Next step2");
});

class Device {
  private move = true;
  public some = "some";

  public action() {
    this.move ? console.log("Go") : "stop";
  }
}

const Desctop = new Device();
Desctop.action();
console.log(Desctop.some);
Desctop.some = 'any';
console.log(Desctop.some);
