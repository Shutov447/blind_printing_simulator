
class SymbolVerification {
  before(event, i) {
    console.log(`до ${event.key}: ${i}`);
  }

  after(event, i) {
    console.log(`после ${event.key}: ${i}`);
  }
}

export default SymbolVerification;
