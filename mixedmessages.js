const animals = ['dog','cat','mouse','wolf','whale','giraffe','ape',
                 'bear','lion','hamster','orca','squirrel','ant','lizard',
                 'butterfly', 'spider', 'fly', 'catepillar', 'cheetah',
                 'porcupine', 'chicken', 'cow', 'bee', 'slug', 'elephant',
                 'bird', 'turtle', 'crocodile'];

const attributes = ['faster','slower', 'bigger', 'smaller', 'taller', 
                    'shorter', 'weaker', 'stronger'];

const n = animals.length;
const m = attributes.length;
const i = Math.floor(Math.random() * n);
const j = Math.floor(Math.random()*n);
const k = Math.floor(Math.random()*m);
const p1 = animals[i];
const p2 = animals[j];
const a = attributes[k];

console.log('My pet ' + p1 + ' is ' + a + ' than my pet ' + p2 + '.');