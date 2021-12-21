import DiningSelector from '@admiralfeb/dining-selector';

export default class DiningService {
  private _selector: DiningSelector;
  constructor() {
    this._selector = new DiningSelector();
  }

  get options(): string[] {
    return this._selector.options;
  }

  addOption(option: string): string | void {
    try {
      this._selector.addOption(option);
    } catch (error) {
      return (error as Error).message;
    }
  }

  deleteOption(option: string): string | void {
    try {
      this._selector.deleteOption(option);
    } catch (error) {
      return (error as Error).message;
    }
  }

  selectOption(): string {
    return this._selector.selectOption();
  }

  resetOptions(): void {
    this._selector.resetOptions();
  }
}
