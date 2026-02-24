// Quick fix for lessons - run this to replace with working versions
const fs = require('fs');

const simpleExplanations = {
  'Motion': `MOTION - The Physics of Movement

What is Motion?
Motion is the change in position of an object over time.

Key Concepts:
1. Distance vs Displacement
   - Distance: Total path traveled
   - Displacement: Straight line from start to end

2. Speed vs Velocity  
   - Speed: How fast (just a number)
   - Velocity: Speed + direction (vector)
   - Formula: speed = distance / time

3. Acceleration
   - Rate of change of velocity
   - Formula: a = (v_final - v_initial) / time
   - Unit: m/s²

Important Formulas:
- v = u + at
- s = ut + ½at²
- v² = u² + 2as

Free Fall:
- Gravity accelerates everything at 9.8 m/s²
- All objects fall at same rate (without air resistance)

Real Examples:
- Car speeding up: positive acceleration
- Car braking: negative acceleration (deceleration)
- Throwing ball up: slows down, stops, speeds up coming down

Remember: Velocity = Speed + Direction!`,

  'Newton Laws': `NEWTON'S LAWS OF MOTION

Law 1 - Inertia:
Objects at rest stay at rest, objects in motion stay in motion, unless acted upon by a force.

Example: When car stops suddenly, you jerk forward (your body wants to keep moving).

Law 2 - F = ma:
Force = Mass × Acceleration

What this means:
- More force = more acceleration
- More mass = less acceleration (for same force)
- Heavier things need more force to move

Law 3 - Action-Reaction:
Every action has an equal and opposite reaction.

Examples:
- Walking: You push ground back, ground pushes you forward
- Rocket: Pushes gas down, gas pushes rocket up
- Jumping: You push down, ground pushes you up

Weight vs Mass:
- Mass: Amount of matter (doesn't change)
- Weight: Force of gravity (W = mg)
- Same mass everywhere, different weight on different planets

Remember: All three laws work together!`,

  'Energy': `ENERGY - The Ability to Do Work

Types of Energy:

1. Kinetic Energy (Moving)
   - Formula: KE = ½mv²
   - Anything moving has it
   - Speed matters A LOT (v²)

2. Potential Energy (Stored)
   - Formula: PE = mgh
   - Energy waiting to be used
   - Higher = more potential energy

Law of Conservation:
Energy cannot be created or destroyed, only transformed!

Example: Roller coaster
- Top: Lots of PE, little KE
- Bottom: Lots of KE, little PE
- Total energy stays same

Work and Power:
- Work: W = Force × Distance
- Power: P = Work / Time
- Unit of energy: Joule (J)
- Unit of power: Watt (W)

Real Examples:
- Eating food: Chemical → Your energy
- Phone battery: Chemical → Electrical → Light
- Solar panel: Light → Electrical

Remember: Energy transforms but never disappears!`,

  'Electricity': `ELECTRICITY - Flow of Electric Charge

Three Key Things:

1. Voltage (V) - The Push
   - Like water pressure
   - Measured in Volts
   - Wall outlet: 120V

2. Current (I) - The Flow
   - How many electrons flow
   - Measured in Amps
   - Current is dangerous!

3. Resistance (R) - The Obstacle
   - What slows down flow
   - Measured in Ohms
   - Thin wire: high resistance

Ohm's Law:
V = I × R
(Voltage = Current × Resistance)

Example: 12V ÷ 4Ω = 3A

Two Ways to Connect:
- Series: One breaks, all break (Christmas lights)
- Parallel: One breaks, others work (house outlets)

Power:
P = V × I
Measured in Watts

Safety:
- Current (amps) is what's dangerous
- Even 0.1A can hurt you
- That's why we have circuit breakers

Remember: Think of electricity like water in pipes!`,

  'Waves': `WAVES - Energy Transfer

What are Waves?
Waves transfer energy without moving material.

Two Types:

1. Transverse (Up & Down)
   - Wave goes forward, stuff moves up/down
   - Examples: Light, water waves

2. Longitudinal (Push & Pull)
   - Wave goes forward, stuff moves forward/back
   - Examples: Sound waves

Wave Properties:
- Wavelength (λ): Distance between peaks
- Frequency (f): Waves per second (Hz)
- Amplitude: Height of wave
- Speed (v): How fast wave travels

The Wave Formula:
v = f × λ

Electromagnetic Spectrum (longest to shortest):
1. Radio waves - Radio, TV, WiFi
2. Microwaves - Microwave ovens
3. Infrared - Heat, remotes
4. Visible Light - What we see!
5. Ultraviolet - Sunburn
6. X-rays - See bones
7. Gamma rays - Most dangerous

All travel at light speed: 300,000,000 m/s!

Wave Behaviors:
- Reflection: Bounces off (mirrors, echoes)
- Refraction: Bends (straw in water)
- Diffraction: Spreads around obstacles
- Interference: Waves combine or cancel

Remember: Waves carry energy, not material!`,

  'Modern Physics': `MODERN PHYSICS - The Extreme Universe

Two Big Ideas:

1. Relativity (Einstein)
   - Nothing faster than light
   - Time slows at high speeds
   - E = mc² (mass = energy)
   - Gravity is curved space

2. Quantum Mechanics (Tiny World)
   - Light is both wave AND particle
   - Particles exist in multiple states
   - Can't know position AND speed perfectly
   - Observation changes reality

Key Discoveries:
- Photoelectric Effect: Light is particles
- Wave-Particle Duality: Everything is both
- Uncertainty Principle: Can't know everything
- Quantum Tunneling: Particles pass through barriers

Real Applications:
- Nuclear Energy: E = mc²
- Semiconductors: Quantum mechanics
- Lasers: Stimulated emission
- MRI: Nuclear magnetic resonance
- GPS: Needs relativity corrections!

Mind-Blowing Facts:
- Time isn't constant
- Particles are waves
- Observation changes reality
- Quantum entanglement: instant connection

Famous Equations:
- E = mc² (Mass-energy)
- E = hf (Photon energy)

Remember: Reality is weirder than it seems!`
};

console.log('Simple explanations ready!');
console.log('Copy these into server.js if needed.');
