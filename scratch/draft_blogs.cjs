const fs = require('fs');

function countWords(str) {
  return str.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

// ---------------------------------------------------------------------------
// 1. THE RIDE WE ALMOST DIDN'T TAKE
// ---------------------------------------------------------------------------
const story1Content = `
<div class="article-lead-paragraphs">
  <p class="article-lead-p">
    At 4:18 AM, the group chat was an inch from flatlining. Rain was hammering the window air-conditioner in violent, rattling sheets, the weather radar on the phone was glowing angry crimson across the Western Ghats, and the first message had already landed on screen: <em>“Guys, honestly… look at the sky. Should we push this to next weekend?”</em>
  </p>
  <p class="article-body-p">
    Five minutes passed without a response. That heavy, familiar silence when everyone secretly hopes someone else will pull the plug. Outside, the streetlights reflected in murky puddles across the driveway. Your riding boots are already on, your base layer feels warm against the pre-dawn chill, and your tank bag is packed with spare dry socks, a torque wrench, and waterproof camera housing. Yet the bed behind you still feels warm, and common sense whispers that sleeping in is the only rational choice.
  </p>
</div>

<div class="accessory-sections-list">
  <section class="accessory-item-card">
    <div class="accessory-num-badge">01</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Fuel Pump Standoff</h2>
      <div class="accessory-tag"><i class="fa-solid fa-gas-pump"></i> 05:15 AM • HIGHWAY MILE 00</div>
      <p class="accessory-desc">
        It took a single, curt message from Dev to break the deadlock: <em>“I’m at the highway fuel pump. Engine’s idling. If nobody shows by five-thirty, I’m riding solo.”</em> That was all it took. Twenty minutes later, three motorcycles stood under the flickering fluorescent canopy of the HP petrol bunk on the outskirts of Pune. Water dripped steadily from our rain jackets onto the greasy forecourt concrete. We stared at the black sky ahead, steaming paper cups of cutting chai burning through damp gloves. Nobody spoke about the forecast. We just pulled our helmet straps tight, clicked visors shut, and thumbed the starter buttons.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">02</div>
    <div class="accessory-details">
      <h2 class="accessory-title">Into the Sahyadri Storm</h2>
      <div class="accessory-tag"><i class="fa-solid fa-cloud-showers-heavy"></i> 06:45 AM • THE ASCENT</div>
      <p class="accessory-desc">
        The first sixty kilometers were pure grit. Spray from heavy container trucks blurred the dark highway into an oil-slicked haze. Water worked its way past collar seams and pooled inside boot linings. Sid was riding sweep on his street twin, his yellow auxiliary light carving through the spray behind me like a reassuring lighthouse. On the climb toward Varandha Ghat, the storm peaked. Waterfalls burst directly across the tarmac, tumbling down black basalt walls and washing river sand into the switchbacks. Every apex demanded total concentration—smooth throttle, feather-light inputs, and blind trust in the tire compound beneath us. There was no scenery, no photography, just the rhythmic sweep of headlights against dense fog.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">03</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Sputter and the Wrench</h2>
      <div class="accessory-tag"><i class="fa-solid fa-wrench"></i> 08:20 AM • MOUNTAIN PASS TRIAGE</div>
      <p class="accessory-desc">
        Just past the pass summit, Sid’s motorcycle choked, backfired, and rolled to a silent halt beside a ruined stone watchtower. Water had seeped into an unshielded spark plug boot. An hour earlier, on a warm bed, this breakdown would have been the ultimate ‘I told you so.’ But here, shivering under a leaking tin awning while rain drummed like artillery on the corrugated roof, something else took over. Dev whipped out a pocket multi-tool; I passed the contact cleaner and a dry microfiber cloth. We took turns shielding the open engine with an unfolded emergency tarp while laughing at how utterly ridiculous we looked—three grown men soaked to the bone, elbow-deep in grease on a deserted mountain pass.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">04</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Break in the Clouds</h2>
      <div class="accessory-tag"><i class="fa-solid fa-sun"></i> 09:10 AM • THE TURNING POINT</div>
      <p class="accessory-desc">
        When the twin fired back to life with a deep, throaty growl, something miraculous happened. The wind dropped. The dense wall of grey fog that had smothered the valley began to tear apart. Within ten minutes, great spears of golden morning sunlight pierced the cloud bank, illuminating emerald green terrace fields five thousand feet below us. Steam rose off our hot exhaust headers in curling white plumes. The smell of wet earth, crushed eucalyptus, and hot two-stroke oil filled the air. We stood on the edge of the parapet in stunned, reverent silence. Had we stayed in bed, that entire mountain would have existed without us.
      </p>
    </div>
  </section>
</div>

<div class="article-callout-panel">
  <div class="callout-inner">
    <div class="callout-icon"><i class="fa-solid fa-quote-left"></i></div>
    <div>
      <h3 class="callout-heading">The Unspoken Rider Code</h3>
      <p class="callout-text">
        The weather app tells you what the sky is doing; it will never tell you what the road can give you. When riders push through hesitation together, convenience dies and genuine brotherhood begins.
      </p>
    </div>
  </div>
</div>

<div class="article-conclusion-block">
  <h3 class="conclusion-heading">The Road Remembers What Comfort Forgets</h3>
  <p class="article-body-p">
    By late afternoon, we were sitting on plastic chairs outside a tiny coastal fish stall in Dapoli, our jackets drying over wooden fence rails in the salt breeze. The tires were speckled with mountain mud, our faces were streaked with road grime, and our muscles ached with that delicious, deep-seated fatigue known only to riders who have wrestled the elements and won.
  </p>
  <p class="article-body-p">
    Years from now, none of us will remember the Saturdays we spent comfortably asleep under dry blankets. We will never talk about the chores we finished or the clean socks we kept dry. But we will talk about the morning we almost cancelled—the cold fuel pump at five AM, the spark plug triage in the rain, and the golden sunlight bursting through the clouds when we dared to roll the throttle anyway. The rides you almost don't take will always be the ones you can never forget.
  </p>
</div>
`;

console.log('Story 1 word count:', countWords(story1Content));

// ---------------------------------------------------------------------------
// 2. SOMEWHERE BETWEEN HOME AND THE MOUNTAINS
// ---------------------------------------------------------------------------
const story2Content = `
<div class="article-lead-paragraphs">
  <p class="article-lead-p">
    There is a strange, invisible boundary line that every long-distance motorcyclist crosses, usually somewhere around the three-hundredth kilometer. You are no longer leaving home, but you are still nowhere near the mountains. You are simply suspended in the vast, roaring middle—an anonymous silhouette cruising at ninety kilometers per hour through a landscape that does not know your name.
  </p>
  <p class="article-body-p">
    Leaving a city on two wheels is always chaotic. You fight through the morning ring road traffic, dodge impatient cabs, and check your mirrors compulsively. Inside your helmet, your mind is still crowded with yesterday's noise: unresolved arguments, pending project deadlines, unpaid invoices, and the domestic rhythm you abruptly left behind at dawn. But as the highway stretches outward and the apartment complexes yield to open scrubland, a quiet alchemy begins to take place.
  </p>
</div>

<div class="accessory-sections-list">
  <section class="accessory-item-card">
    <div class="accessory-num-badge">01</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Meditation of Steady Velocity</h2>
      <div class="accessory-tag"><i class="fa-solid fa-gauge-high"></i> KM 180 • THE SHIFTING MIND</div>
      <p class="accessory-desc">
        Motorcycling is often romanticized as an adrenaline rush, but touring is actually an act of deep contemplation. At highway speeds, the constant rush of wind across your helmet visor acts like white noise, drowning out the shallow anxieties of urban life. The repetitive physical rhythm—the gentle roll of the wrist, the counter-steer into long sweeping bends, the periodic glance at engine temperatures—demands just enough focus to quiet your internal monologue. You stop thinking about where you need to be and start existing purely where you are.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">02</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Tea Stall Under the Banyan Tree</h2>
      <div class="accessory-tag"><i class="fa-solid fa-mug-hot"></i> KM 340 • UNEXPECTED ENCOUNTERS</div>
      <p class="accessory-desc">
        Somewhere past Satara, taking an unplanned diversion onto an old state highway to escape truck traffic, I pulled up under the sprawling canopy of an ancient banyan tree. An old man in a faded kurta was boiling tea in a blackened brass vessel over tamarind charcoal. He didn’t ask where I was coming from or how much the motorcycle cost. He simply handed me a glass of scalding chai, took a slow drag from a bidi, and pointed toward the blue ridgelines shimmering on the northern horizon. <em>“Wind will pick up after noon near the river,”</em> he said softly. <em>“Keep your eyes on the trees.”</em> That was it. A three-minute exchange with a complete stranger that carried more grounded human warmth than a month of sterile office emails.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">03</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Changing Texture of the Air</h2>
      <div class="accessory-tag"><i class="fa-solid fa-wind"></i> KM 480 • SENSORY AWAKENING</div>
      <p class="accessory-desc">
        In a car, travel is insulated; you view the world through tinted double-glazed windows at a regulated twenty-two degrees Celsius. On a motorcycle, you drink the geography directly through your pores. You know the exact moment you leave the dry Deccan plateau because the air cools by five degrees within the space of half a kilometer. The scent shifts abruptly from baked red soil and diesel exhaust to the sharp, wet fragrance of pine resin and crushed ferns. Your fingers adjust on the grips, your visor cracks open a notch to welcome the mountain chill, and your chest expands with a sensation that feels dangerously close to total freedom.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">04</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Foothill Sunset</h2>
      <div class="accessory-tag"><i class="fa-solid fa-mountain"></i> KM 590 • THE GATEWAY</div>
      <p class="accessory-desc">
        By late afternoon, the first real foothills loomed out of the haze. The low sun cast long, dramatic shadows across the asphalt, turning the yellow centerline into a strip of burning gold. I pulled the bike onto a gravel overlook, cut the ignition, and listened to the satisfying metallic ticking of cooling exhaust pipes in the silence. The valley below was blanketed in violet dusk; the high peaks ahead were still crowned in pink light. In that quiet moment, standing alone beside a machine that had carried me six hundred kilometers without a complaint, the weight I had been carrying for six months simply evaporated into the thin mountain air.
      </p>
    </div>
  </section>
</div>

<div class="article-callout-panel">
  <div class="callout-inner">
    <div class="callout-icon"><i class="fa-solid fa-compass"></i></div>
    <div>
      <h3 class="callout-heading">The Real Purpose of the Journey</h3>
      <p class="callout-text">
        We tell ourselves we ride to reach the destination—the high pass, the remote lake, the mountain peak. But the truth is simpler: the transformation happens in the quiet miles in between, where the road strips away everything artificial.
      </p>
    </div>
  </div>
</div>

<div class="article-conclusion-block">
  <h3 class="conclusion-heading">The Silence Inside the Helmet</h3>
  <p class="article-body-p">
    People who don’t ride often ask how we tolerate the exhaustion, the rain, the sore muscles, and the hours of solitary isolation. They imagine a motorcycle journey as an endurance test to be survived. What they cannot comprehend is that the isolation is not a drawback; it is the entire medicine.
  </p>
  <p class="article-body-p">
    Somewhere out there on that lonely ribbon of asphalt, halfway between the home you left and the mountains you seek, the clutter of modern life recedes until only the essential remains: your breath, the machine, the road, and the sky. You don't ride to escape who you are; you ride to remember who you were before the world told you who to be.
  </p>
</div>
`;

console.log('Story 2 word count:', countWords(story2Content));

// ---------------------------------------------------------------------------
// 3. THE LAST RIDER IN THE PACK
// ---------------------------------------------------------------------------
const story3Content = `
<div class="article-lead-paragraphs">
  <p class="article-lead-p">
    If you want to feel fast, ride up front right behind the road captain. If you want to understand the true weight of brotherhood on two wheels, drop your speed, let the formation rumble past, and take your station at the very back of the pack.
  </p>
  <p class="article-body-p">
    The sweep rider—the tail gunner, the rear marshal, the guardian of the convoy—holds the most thankless and vital job on any motorcycle expedition. In motorcycle photography and social media reels, nobody looks at the sweep. There are no dramatic action shots of the tail; the GoPro cameras are all pointed forward at the shiny chrome and roaring exhausts of the lead group. But ask any veteran road captain who truly carries the safety of forty lives over eight hundred kilometers of unforgiving highway, and they will point without hesitation to the lone rider bringing up the rear.
  </p>
</div>

<div class="accessory-sections-list">
  <section class="accessory-item-card">
    <div class="accessory-num-badge">01</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Weight on the Rear Fender</h2>
      <div class="accessory-tag"><i class="fa-solid fa-shield-halved"></i> THE SWEEP PHILOSOPHY</div>
      <p class="accessory-desc">
        Riding sweep is not about riding slow; it requires being one of the fastest, most mechanically competent, and emotionally patient riders in the pack. When a reckless truck cuts into the convoy formation, the sweep must move outward to hold the lane and shield younger riders. When the pack accelerates out of a toll barrier, the sweep must ride hard to close the accordion gap without panicking the tail. Strapped to the sweep’s tail rack is not weekend clothing, but the heavy artillery of survival: a twelve-volt tire inflator, mushroom plug kits, a lithium jump-starter, heavy-duty tow straps, and a comprehensive wilderness trauma kit.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">02</div>
    <div class="accessory-details">
      <h2 class="accessory-title">Reading the Dance of Taillights</h2>
      <div class="accessory-tag"><i class="fa-solid fa-eye"></i> PACK TELEMETRY & INTUITION</div>
      <p class="accessory-desc">
        From the back, the convoy is an organic, breathing organism. You learn to read the subconscious body language of every rider fifty meters ahead. You spot the subtle stiffness in the shoulders of the novice tourer who is gripping the handlebars too tightly in the wet; you notice the loose luggage strap fluttering dangerously near the rear sprocket of bike number seven; you detect the faint wobble in line choice that signals rider fatigue long before the rider himself realizes he needs to pull over. The sweep watches over them like a shepherd, matching their rhythm and holding a steady safety envelope behind them.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">03</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Breakdown in the Dark</h2>
      <div class="accessory-tag"><i class="fa-solid fa-wrench"></i> 09:40 PM • STATE HIGHWAY 66</div>
      <p class="accessory-desc">
        Last winter, descending through an unlit forest corridor outside Chiplun, a jagged shard of scrap steel tore through the rear tire of a young rider named Rohan on his first long-distance tour. His bike fishtailed violently before he managed to muscle it onto the gravel shoulder. The main convoy, eager for dinner at the valley hotel, vanished around the dark mountain shoulder. In the pitch black, with dense fog rolling through the teak trees and heavy trucks roaring past inches away, Rohan was trembling with panic and mortification. <em>‘I ruined the ride for everyone,’</em> he stammered, his hands shaking so hard he couldn’t take his helmet off.
      </p>
    </div>
  </section>

  <section class="accessory-item-card">
    <div class="accessory-num-badge">04</div>
    <div class="accessory-details">
      <h2 class="accessory-title">The Unbreakable Promise</h2>
      <div class="accessory-tag"><i class="fa-solid fa-handshake"></i> ROADSIDE RESCUE</div>
      <p class="accessory-desc">
        I killed my engine, clicked on my amber hazard beacon, and put a firm hand on his shoulder. <em>“Take a breath, kid. Nobody gets left behind on this road. That’s why I’m here. Hold the flashlight.”</em> Eight minutes later, the tire was plugged, the portable inflator had hissed thirty-four PSI back into the carcass, and we were back on the road. We didn't rush. We rode in close staggered formation through the dark, my headlight illuminating the asphalt directly ahead of his front tire, guiding him through every pothole and hairpin bend down to the valley floor.
      </p>
    </div>
  </section>
</div>

<div class="article-callout-panel">
  <div class="callout-inner">
    <div class="callout-icon"><i class="fa-solid fa-heart-pulse"></i></div>
    <div>
      <h3 class="callout-heading">The Silent Pact of the Pack</h3>
      <p class="callout-text">
        Every rider who leaves home makes an unspoken promise to the people waiting for them: that they will return. The sweep rider is the person who ensures that promise is kept, no matter how cold the night or how broken the tarmac.
      </p>
    </div>
  </div>
</div>

<div class="article-conclusion-block">
  <h3 class="conclusion-heading">The Purest Feeling in Motorcycling</h3>
  <p class="article-body-p">
    When we finally rolled into the hotel courtyard at ten-thirty, the lead group was waiting by the porch. As Rohan parked his motorcycle and was enveloped by high-fives and steaming bowls of dal, the road captain walked over to my bike. He didn’t offer a lengthy speech. He just handed me a glass of hot tea, slapped my shoulder, and gave that single, slow nod that means everything in this community.
  </p>
  <p class="article-body-p">
    The world will always celebrate the riders who lead the pack and cross the pass first. But the soul of motorcycling will forever belong to the rear, where the exhaust fumes are thickest, the hours are longest, and the responsibility never rests. Because when the ride is over and your engine finally ticks cool under the stars, the greatest feeling in the world isn’t that you rode fast—it’s knowing that every single brother who set off with you is safely home.
  </p>
</div>
`;

console.log('Story 3 word count:', countWords(story3Content));
