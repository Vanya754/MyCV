import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/pages/snake/shared/constants/constants';
import { Position } from 'src/app/pages/snake/shared/interfaces/position';
import { ModelService } from 'src/app/pages/snake/types/model.service';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  private inputDirection: Position = { x: 0, y: 0 };
  private lastInputDirection: Position = { x: 0, y: 0 };

  constructor(private readonly m: ModelService) {}

  getInputs(): void {
    window.addEventListener('keydown', (e) => {
      if (!this.m.isPaused && !this.m.gameOver) {
        const direction = AppConstants.keyToDirection[e.code];
        if (direction) this.setDirection(direction);
      }
    });
  }

  setDirection(direction: string): void {
    this.m.gameOver = false;
    switch (direction) {
      case 'ArrowUp':
        if (this.lastInputDirection.y !== 0) break;
        this.inputDirection = { x: 0, y: -1 };
        this.m.headTurn = 180;
        break;
      case 'ArrowDown':
        if (this.lastInputDirection.y !== 0) break;
        this.inputDirection = { x: 0, y: 1 };
        this.m.headTurn = 0;
        break;
      case 'ArrowLeft':
        if (this.lastInputDirection.x !== 0) break;
        this.inputDirection = { x: -1, y: 0 };
        this.m.headTurn = 90;
        break;
      case 'ArrowRight':
        if (this.lastInputDirection.x !== 0) break;
        this.inputDirection = { x: 1, y: 0 };
        this.m.headTurn = -90;
        break;
    }
  }

  getInputDirection(): Position {
    this.lastInputDirection = this.inputDirection;
    return this.inputDirection;
  }
}
