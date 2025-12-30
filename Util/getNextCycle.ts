export function getNextCycle(currentCycle: number) {
  return currentCycle == 0 || currentCycle == 8 ? 1 : currentCycle + 1; //se ele for 0 ou 8 vai receber o valor de um, se for 1 ou outro numero até 7, vai somar + 1
}
