import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  NameIconInterface,
  Expansion_Packs,
} from 'src/database/database.interface';

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class RandomGeneratorComponent implements OnInit {
  random_expansion_pack: NameIconInterface[] = [];
  random_income: number = null;
  isClicked = true;
  ngOnInit() {}

  // generate random income between 20.000 && 320.000, with probabilities
  generateRandomIncome() {
    const interval = setInterval(() => {
      // if range 20.000 - 70.000 number < 0.5
      const lowRange = Math.random() <= 0.5;
      // else if range 70.001 - 150.000 number > 0.51 - 0.8
      const midRange = !lowRange && Math.random() <= 0.8;
      // else range 150.001 - 320.000 number > 0.71 - 0.99

      if (lowRange) {
        this.random_income = Math.floor(
          Math.random() * (70000 - 20000) + 20000
        );
      } else if (midRange) {
        this.random_income = Math.floor(
          Math.random() * (150000 - 70001) + 70001
        );
      } else {
        this.random_income = Math.floor(
          Math.random() * (320000 - 150001) + 150001
        );
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 1500);
  }

  // generateExpansionPack(pack: NameIconInterface[], n: number) {
  //   const newArray = [...pack];
  //   this.random_expansion_pack = [];
  //   for (let i = 0; i < n; i++) {
  //     const randomLength: number = Math.floor(
  //       Math.random() * (newArray.length - 1)
  //     );
  //     let value: string = newArray[randomLength];
  //     if (!this.random_expansion_pack.includes(value)) {
  //       this.random_expansion_pack.push(value);
  //       newArray.splice(randomLength, 1);
  //     }
  //   }
  // }

  generateRandomPacks() {
    this.generateRandomIncome();
    const interval = setInterval(() => {
      this.random_expansion_pack = [];
      Object.values(Expansion_Packs).forEach(
        (expansion_pack: NameIconInterface[]) => {
          const mathRandom: number = Math.floor(
            Math.random() * expansion_pack.length
          );
          const value: string = expansion_pack[mathRandom].name;
          const icon: string = expansion_pack[mathRandom].icon;
          const type: string = expansion_pack[mathRandom].type;
          const expansion_type: string = expansion_pack[mathRandom].type_key;
          this.random_expansion_pack.push({
            name: value,
            icon,
            type,
            type_key: expansion_type,
          });
        }
      );
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 1500);
  }

  rerollPack(random_pack: NameIconInterface, i: number) {
    const interval = setInterval(() => {
      const pack: NameIconInterface[] = Expansion_Packs[random_pack.type_key];
      const mathRandom = Math.floor(Math.random() * pack.length);
      if (pack[mathRandom].type_key === random_pack.type_key) {
        this.random_expansion_pack[i] = pack[mathRandom];
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 1500);
  }
}
