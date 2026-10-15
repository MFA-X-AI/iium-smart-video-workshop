# Workshop deck: scene script

Draft from the user's dictation, 4 Oct 2026. The deck will be an **animated HTML presentation**, not PowerPoint. The user will share the format later.
The deck has five parts: **1 Introduction · 2 Input · 3 Model · 4 Output · 5 Agents**.
Each scene has three parts:
- **On screen:** as few words as possible. The visual carries the idea.
- **Clicks:** what animates on each click.
- **Speaker notes:** in the user's own voice. Casual, first person, talking to the room.

Items marked ⚑ are open questions or suggestions for the user to confirm.

---

# Part 1 · Introduction

## Scene 1: Opening

**On screen**
- The closing frame of the promo video: the particle title "Research in Motion", with "Bring your paper. Leave with a working animation." underneath.
- Bottom line: IIUM · DATE · VENUE.
- Source: `promo/ad/public/title.mp4` (looped, or held on its last frame).

**Clicks:** none. The particle title assembles on load.

**Speaker notes**
> Assalamualaikum, and good morning everyone. Welcome to Research in Motion. Today is about taking your research, the papers you've already written, and turning them into something that moves, with AI doing most of the building.

⚑ Date, venue, and your name and title for this slide.

---

## Scene 2: Word cloud icebreaker ("Who has heard of these?")

**On screen**
- A word cloud of AI names on a dark background, with no title.
- Each tier fades in on its own click. Earlier tiers dim slightly so the new names stand out.

| Click | Tier | Names |
|---|---|---|
| 1 | Chatbots (what people use) | ChatGPT · Claude · Gemini · Grok |
| 2 | The models behind them | Opus · Fable · Sonnet · Haiku · Astra · Sol · Luna · Terra · GPT-5.4 · GPT-5.5 · DeepSeek · Muse |
| 3 | Everything else (open and less-known LLMs) | Qwen · GLM · MiniMax · Kimi · Mistral · Gemma · Phi · Llama |
| 4 | Other fields (not chat at all) | Whisper (speech to text) · Kokoro (voice) · YOLO (object detection) · Stable Audio (music) · LTX · Wan (video) · Z-Image (images) |

**Speaker notes**
> Okay, quick one before we start. Hands up: who has heard of these? ChatGPT, Claude, Gemini, Grok. Okay, most of you.
> *(click)* How about these? Opus, Sonnet, Astra, DeepSeek. These are the actual models running behind those chatbots.
> *(click)* And these ones? Qwen, GLM, MiniMax, Kimi, Mistral. Anyone?
> *(click)* And these? Whisper, YOLO, Kokoro. These aren't chatbots at all. Some of them turn speech into text, some find objects in a picture, some make voices and music. Actually, the video you just watched was made with a few of these.
> So there's a whole zoo of AI out there, and every few months there's a new name.

Checked on 4 Oct 2026:
- **Opus, Fable, Sonnet and Haiku:** these are Claude models (Anthropic).
- **Astra, Sol and Luna:** these are GPT-6 models (OpenAI). Astra is the top tier, Sol the everyday tier and Luna the cheap tier.
- **Terra** belonged to GPT-5.6 (Sol, Terra, Luna). It was dropped in GPT-6. Some sites list it again for GPT-6.1, but I couldn't confirm that. It's fine in the cloud, but it isn't current.
- **Muse** is Meta's model family: Muse Spark from April 2026, and the Muse agent from Sep 2026.

⚑ Open points:
- "5.4 / 5.5": I've read these as GPT-5.4 and GPT-5.5. Tell me if you meant something else.
- **Tier 4 and the promo video:** the line "the video you just watched…" only works if you show the promo before this scene. LTX, Wan, Z-Image and Stable Audio were all used for the promo clips and the KERICE film.

---

## Scene 3: Mapping problems to AI (mind map)

**On screen**
- The single word **AI** sits on the left. Seven branches fan out to the right as separate, equal nodes, listed top to bottom.
- Each branch then gets a few small leaves (examples), so the map has some meat.
- Then a pathway lights up hop by hop: AI → Generative AI → LLMs → Chatbots, as "today's focus".

| Click | Adds | Nodes |
|---|---|---|
| 1 | Root | AI |
| 2 | Branches, top to bottom | Machine learning (ML) · Deep learning (DL) · Anomaly detection · Time series · Computer vision · NLP · Generative AI |
| 3 | Leaves on every branch | See the table below |
| 4 | Pathway: AI → Generative AI | Everything dims. A glowing pulse travels from **AI** along the line and lights up **Generative AI**. |
| 5 | → Large language models | The pulse continues and lights up **Large language models**. |
| 6 | → Chatbots | The pulse lights up **Chatbots** (ChatGPT, Claude, Gemini, Grok). The whole path AI → Generative AI → LLMs → Chatbots stays lit as "today's focus". |

Interactive extra: clicking any node on the map lights up its own pathway from AI, for example AI → Computer vision → Object detection. Use it if someone asks "where does my thing fit?"

Leaves:

| Branch | Leaves |
|---|---|
| Machine learning | Regression · Decision trees · Clustering ⚑ |
| Deep learning | Neural networks · CNNs · Transformers ⚑ |
| Anomaly detection | Fraud detection · Machine fault detection ⚑ |
| Time series | Forecasting (sales, energy, weather) ⚑ |
| **Computer vision** | **Object classification · Object detection · Segmentation · Pose estimation** |
| NLP | Translation · Sentiment analysis · Speech to text ⚑ |
| **Generative AI** | **Image generation (GANs → diffusion) · Large language models → chatbots** |

**Speaker notes**
> So all of these are what we call AI. As an engineer, my main problem is this: a client comes to me with a business challenge, and I need to map that challenge onto an AI concept and work out how AI can automate it.
> *(click)* So when a client comes in, it's usually one of these. Machine learning. Deep learning. Anomaly detection. Time series. Computer vision. NLP, natural language processing. And generative AI.
> *(click)* And each of these goes deeper. Computer vision, which is my own area, has classification ("what is this?"), detection ("where is it?"), segmentation ("exactly which pixels?"), and pose estimation ("how is it standing?"). Generative AI is where you make new things. Images, from GANs back in the day to the diffusion models now. And text, with large language models.
> *(click)* So today, the path we're taking is this. From AI, we go into generative AI.
> *(click)* Inside generative AI, we go into large language models.
> *(click)* And from large language models, we get the chatbots that everyone uses. ChatGPT, Claude, Gemini, Grok. That's our focus today.
> *(optional, clicking a node)* And if you're wondering where your own work fits, say you're doing object detection, it's here: AI, computer vision, object detection.

Notes:
- I read "animal detection" in the dictation as **anomaly detection**.
- **Computer vision, fourth item:** I used **pose estimation**. That matches the five tasks YOLO itself offers (classify, detect, segment, pose, oriented boxes). Swap it for **object tracking** if that's the one you meant.
- **GANs:** GANs were the image generators of roughly 2014–2021. Today's image generators (Stable Diffusion, Z-Image, Midjourney) are diffusion models. "GANs → diffusion" keeps the word you wanted without implying that GANs are what's used now.
- ⚑ The leaves for the other five branches are my suggestions to give the map some substance. Trim them freely; three words per branch at most keeps the slide light.
- On ML vs DL, if someone asks: "Technically deep learning is part of machine learning. But usually when we say machine learning, we mean the simpler models, and deep learning is the deep neural networks."

---

## Scene 4: "It all goes in the square hole"

**On screen**
- The meme video of the engineer reacting to a shape-sorter toy, where every shape goes into the square hole. Full-bleed, with no text.
- Optional end card: the square hole labelled "LLM", and the shapes labelled vision, anomaly detection, robotics, and so on.

**Clicks:** 1 click plays the video. A second click shows the labelled end card, if you use it.

**Speaker notes**
> Back in the day, each of these was its own field, with its own specialists and its own tools. Now? *(play)* It all goes in the square hole. You can literally do machine vision, anomaly detection, even robotics with large language models. So that's where we're going to keep our focus today.

⚑ Notes:
- **The clip:** I don't have it in the repo, so you'll need to supply it. It's a viral clip, so check that you're fine showing it at a university event.
- **Wording:** "can literally do" holds for vision and robotics, where LLMs with vision are now used. For anomaly and fraud detection at scale, classic ML is often still the better tool. If someone challenges it, a safe line is: "you *can* do it with an LLM. Whether you *should* is another talk."

---

## Scene 5: Input → Model → Output

**On screen**
- Three large blocks in a row with arrows between them: **Input → Model → Output**. Nothing else.
- Each block lights up on its own click. The next scenes zoom into **Input** first.

| Click | Lights up |
|---|---|
| 1 | Input |
| 2 | Model |
| 3 | Output |

**Speaker notes**
> So to make things very simple, here's how I like to explain how AI works, and how you map an AI problem. Typically you have the input, you have the model, and you have the output.
> These three things are basically what we'll cover in this workshop. We'll go through them one by one, starting with the input.

---

# Part 2 · Input

> **Section divider on screen:** the Input → Model → Output row from Scene 5 comes back, with **Input** lit and the other two dim. The same row is used at the start of every part, so the room always knows where we are.

## Scene 6: Input, the classic example (rent price)

**On screen**
- The same Input → Model → Output row, now filled in. Big, readable from the back of the room.
- **Input:** three cards: 🛏 Rooms **3** · 📍 Location **Gombak** · 📐 Size **1,100 sq ft**
- **Model:** a box.
- **Output:** a price tag: **RM 1,400 / month**

| Click | What happens |
|---|---|
| 1 | The three input cards drop in one by one |
| 2 | They slide into the model box, which pulses |
| 3 | The price tag pops out on the right |

**Speaker notes**
> Let's start with a classic example. Say we want to predict rent price. That's our output. The input would be things like the number of rooms, the location, the size of the house. We feed that into a model, and out comes the price.
> And here the input is, well, numbers. Pretty straightforward.

Notes:
- The values (3 rooms, Gombak, 1,100 sq ft, RM 1,400) are illustrative and not real market data. Gombak is near the IIUM campus, so the room will relate to it.
- ⚑ Optional bridge line, if you want it: "Well, except location. Gombak isn't a number. So even here, we have to turn it into one somehow." It sets up the next three scenes nicely: everything has to become numbers.

---

## Scenes 7–9: Everything becomes numbers (image, voice, text)

All three scenes use the same layout, so the pattern is obvious by the third:
- **Big visuals that fill the screen,** flowing left → right: **the real thing → broken into pieces → numbers → the model**.
- Almost no text on screen, only a small label for each stage. You talk over it.
- Rich animation on each click: the pieces physically fly apart and morph into numbers, and the numbers stream into the model.

### Scene 7: Image → numbers

**On screen**
- Left, filling half the screen: a photo of a cat.

| Click | What happens |
|---|---|
| 1 | The cat photo shatters into a visible pixel grid. The squares separate with small gaps, so you can see they're just coloured blocks. |
| 2 | The camera zooms into a patch. Each pixel flips over to show its number (0–255), e.g. 34, 87, 201. Bonus: each pixel splits into three numbers, R, G and B. |
| 3 | The numbers stream right into the model box, which lights up. |

**Speaker notes**
> So what about images? Here's a cat. *(click)* To a computer, this picture is just a grid of tiny squares, pixels. *(click)* And each pixel is just a number, from 0 to 255, how bright it is. Actually three numbers, red, green and blue. *(click)* And those numbers are what we feed into the model. That's how you represent an image as numbers so the model can take it as input.

### Scene 8: Voice → numbers

**On screen**
- Left: a big, animated sound wave of someone saying a short phrase (ideally your own voice saying "Assalamualaikum").

| Click | What happens |
|---|---|
| 1 | The smooth wave gets sliced into thin vertical samples, like a bar chart, as you zoom in. |
| 2 | Each slice turns into its number (e.g. 0.12, −0.38, 0.51…), and a counter shows "16,000 numbers per second". |
| 3 | The numbers stream into the model. |

**Speaker notes**
> Same thing with voice. *(click)* Sound is just a wave, and we measure the height of that wave thousands of times a second. *(click)* So one second of your voice becomes about sixteen thousand numbers. *(click)* And again, those numbers go into the model.

Notes:
- 16,000 per second (16 kHz) is the rate speech models like Whisper use. Music and phone audio use other rates, but 16 kHz is the correct one for speech AI.
- ⚑ For accuracy: Whisper doesn't take the raw numbers directly. It first turns them into a spectrogram, a picture of the frequencies over time. It's optional, but it's a nice extra click, because it shows that voice can even become an *image*. Skip it if it's too much.

### Scene 9: Text → tokens → numbers

**On screen**
- Left: a big sentence in plain words, e.g. **"Bring your paper to the workshop."**

| Click | What happens |
|---|---|
| 1 | The sentence splits into coloured chunks, the tokens: `Bring` · ` your` · ` paper` · ` to` · ` the` · ` workshop` · `.` (7 tokens). |
| 2 | Each token flips into its ID number: 90208 · 634 · 6651 · 316 · 290 · 24834 · 13 |
| 3 (optional) | The same sentence in Malay, "Bawa kertas penyelidikan anda ke bengkel ini.", splits into **13** tokens: `B` `awa` ` k` `ertas` ` peny` `el` `idikan` ` anda` ` ke` ` beng` `kel` ` ini` `.` |
| 3 | The numbers stream into the model. |

**Speaker notes**
> And last but not least, words. This is what the chatbots work with. *(click)* A sentence gets chopped into pieces called tokens. Sometimes a whole word, sometimes part of a word. *(click)* And every token is just a number in a big dictionary. *(optional click)* And look what happens in Malay. Same sentence, but almost twice the tokens, because these models learned mostly from English. *(click)* And those numbers are what go into the model. So whether it's a picture, a voice, or a sentence, by the time it reaches the model, it's all numbers.

Notes:
- **Real token IDs:** the splits and IDs above are real. They come from OpenAI's open-source tokenizer (`tiktoken`, `o200k_base`, the one GPT-4o and later use), checked on 4 Oct 2026. Other companies' models split text differently, so the numbers are "one real example", not universal.
- **The Malay click:** the same meaning takes about twice as many tokens in Malay (13 vs 7), because these tokenizers learned mostly from English. The room will relate to it, and it matters for cost and limits (see Scene 17).
- For accuracy: inside the model, each token ID is then turned into a long list of numbers (an embedding). You don't need to say this, but it's the answer if an expert asks "isn't it vectors?"

---

# Part 3 · Model

> **Section divider on screen:** the Input → Model → Output row, with **Model** lit.

## Scene 10: The model, one recipe behind most of the names

**On screen**
- The word cloud from Scene 2 comes back.
- **Click 1:** every chatbot and LLM name (tiers 1–3) flies into one big glowing box labelled **Transformer**. The tier-4 names (Whisper, YOLO, Kokoro…) drift aside.
- **Click 2:** the box opens into a cloud of tiny dials, the **parameters**. Caption: "parameters = the knobs the model learned".

**Speaker notes**
> So what is the model? Remember all those names from the beginning? *(click)* Almost every chatbot and language model there is built on the same basic recipe, called a transformer. Different companies, different training, but the same family.
> *(click)* And inside, a model is basically a huge number of knobs, which we call parameters. During training, the model adjusts those knobs until the output comes out right. When people say a "7 billion model", they mean 7 billion knobs.

Notes:
- **Why tier 4 drifts aside:** most of those aren't plain transformers. YOLO is mainly convolutional, and Kokoro is a different speech design. Whisper *is* a transformer, so you could let it fly in too. For the slide, I'd keep the "chatbots and LLMs" claim, because that one holds without exceptions.

---

## Scene 11: How big is "big"? (the scale ladder)

**On screen**
- A row of circles growing left → right, with the area to scale (total parameters) and one label each. All are real, published sizes, updated 12 Oct 2026:

| Click | Size | Real example |
|---|---|---|
| 1 | 5 billion | Gemma 4 E2B (Google). Runs on a phone. |
| 2 | 31 billion | Gemma 4 31B. Runs on a good desktop GPU. |
| 3 | 284 billion | DeepSeek V4 Flash |
| 4 | 1.6 trillion | DeepSeek V4 Pro |
| 5 | 2.8 trillion | Kimi K3 (Moonshot), the largest open model so far |
| 6 | **?** | The frontier models: GPT, Claude, Gemini. The ladder shrinks aside and a big dashed circle with a question mark appears. |

**Speaker notes**
> So how big are these models? A small one like Google's Gemma 4, about 5 billion, you can run on your phone. 31 billion, you can run on a good desktop graphics card. Then it jumps. DeepSeek's V4 Flash is 284 billion, V4 Pro is 1.6 trillion, and Kimi K3, from Moonshot in China, is 2.8 trillion. That's the biggest model anyone has released openly so far.
> *(click)* And the best ones, GPT, Claude, Gemini? They don't tell us. The companies keep that secret.

Notes:
- **Sources, all from the makers' own model cards:** Gemma 4 model card (E2B 2.3B effective, 5.1B with embeddings; 31B dense 30.7B; "mobile and edge devices, including phones" for E2B and E4B), the DeepSeek-V4-Pro Hugging Face card (Pro 1.6T, 49B active; Flash 284B, 13B active; MIT licence), and the moonshotai/Kimi-K3 Hugging Face card (2.8T total, 104B active; Kimi K3 License).
- The big three are "mixture of experts" models: only a slice is used for each word. If an expert asks, that's why they're cheaper to run than their size suggests.
- ⚑ **"Largest open model so far":** this rests on Moonshot's "first 3-trillion-class" claim and on coverage up to Oct 2026. Alibaba's Qwen 3.8 Max (2.4T) is smaller, and its open-weight licence is disputed.
- **Replaced (2024–25 models):** Gemma 3 1B, Llama 3.1 8B/70B/405B, DeepSeek-V3 671B, Kimi K2 ~1T. Scene 12 still uses Llama 3.1 405B on purpose, because Meta published its build figures.

---

## Scene 12: What it takes to build one

**On screen**
- One big real example, shown as four giant numbers that count up one per click, each with an icon. **Llama 3.1 405B (Meta, 2024)**, chosen because Meta published the real figures:

| Click | Icon | Number |
|---|---|---|
| 1 | 📚 Data | **15 trillion+** tokens of text |
| 2 | 🖥 Hardware | **16,000+** H100 GPUs, for several months |
| 3 | ⚡ Electricity | **27 MW** of installed capacity · **30.8 million** GPU-hours |
| 4 | 🌫 Carbon | **8,930 tonnes** CO₂ for the 405B (location-based; Meta says it's offset) |

- **Click 5:** zoom out to today's frontier, with the 405B figures shrinking into a corner:
  - Frontier training clusters are now **gigawatt**-scale (xAI's Colossus 2 in Memphis passed 1 GW in 2026).
  - GPT-4's training "cost more than $100 million" (Sam Altman, 2023).

**Speaker notes**
> So what does it take to build one of these? Here's a model where the company actually published the numbers. Meta's Llama, 405 billion parameters. *(click)* They trained it on over 15 trillion tokens. *(click)* On more than 16,000 top-end GPUs, running for months. *(click)* The cluster draws around 27 megawatts. *(click)* And it produced almost nine thousand tonnes of CO₂.
> *(click)* And that was 2024. Today, the frontier companies are building data centres measured in gigawatts. Back when GPT-4 was trained, Sam Altman said it cost more than 100 million dollars. So this is not something a university builds. That's why we *use* these models instead.

Sources and ⚑:
- **Llama figures:** Meta's model card on Hugging Face (15T+ tokens, 16K+ H100, 30.84M GPU-hours for 405B, 8,930 t CO₂eq location-based for the 405B; 11,390 t is the total for all three Llama 3.1 models, corrected 12 Oct 2026). The 27 MW is Epoch AI's figure for that cluster.
- **GPT-4 "more than $100 million":** Altman in Apr 2023, as reported by Wired/WSJ.
- **Colossus:** reports conflict on the GPU count (555k vs 770k, "1M H100-equivalents"). Only the "passed 1 GW" claim is used here; it is widely reported, but it comes from xAI/Musk themselves.
- **Not used:** blog estimates of "$200–500M per frontier run in 2026". They come from low-traction sites with no primary data. Epoch AI's more defensible trend is that training costs grow about 3.5× a year.

---

## Scene 12b: How much electricity is that? (added 12 Oct 2026)

Built in the deck (slides 14 and 15); the user asked for scene 12 to be more visual and to cover the "a data centre uses as much electricity as a small country" point.
- **Slide 14** turns each Llama number into a picture or comparison: 15T tokens ≈ 1.3 billion IIUM papers; 16,000 dots, one per GPU; ≈ 22 GWh (30.84M GPU-hours × 700 W) ≈ all of Malaysia's electricity for one hour (197 TWh ÷ 8,760 h ≈ 22.5 GWh); 8,930 t CO₂ ≈ 1,900 cars driven for a year (US EPA, 4.6 t per car per year). Click 5: GPT-4 "more than $100M".
- **Slide 15:** squares with area to scale, as electricity per year: Llama cluster (27 MW → 0.24 TWh) → Colossus 2 (1 GW → 8.8 TWh, if run flat out) → Brunei, the whole country (5.56 TWh, 2024) → zoom out: Malaysia (197 TWh, 2024) next to all data centres worldwide (415 TWh, 2024; IEA).
- **The statement, verified:** IEA, *Energy and AI* (Apr 2025): "A typical AI-focused data centre consumes as much electricity as 100 000 households, but the largest ones under construction today will consume 20 times as much." Country figures: Ember via Our World in Data.
- ⚑ The 22 GWh is our estimate from the model card (700 W is Meta's peak power per GPU, adjusted for efficiency), so it's an upper-end figure. Colossus at a full 1 GW all year is an upper bound.

---

## Scene 13: The DeepSeek moment

**On screen**
- A split screen.
  - **Left:** "GPT-4 · more than **$100M**" with a towering stack of GPUs.
  - **Right:** "DeepSeek-V3 · **$5.6M** · 2,048 GPUs, the export-limited H800". The stack is tiny.
- **Click 1:** the right-hand number lands.
- **Click 2:** a stock line plunges: **27 Jan 2025 · Nvidia −$589 billion in one day**, the biggest single-day loss for any company in history, triggered by DeepSeek-R1.
- **Click 3:** a small footnote fades in: "$5.6M = the final training run only."

**Speaker notes**
> Now here's the interesting one. Back in late 2024, DeepSeek, a Chinese lab, released a model that competed with the best. And they did it on the H800, a nerfed version of Nvidia's chip, because of US export restrictions. *(click)* They said the final training run cost about 5.6 million dollars. Compare that with "more than 100 million" for GPT-4.
> *(click)* When their reasoning model R1 came out in January 2025, Nvidia lost 589 billion dollars of market value in a single day. The biggest one-day drop in history. Because people suddenly asked: do you really need all that hardware?
> *(click)* Now to be fair, that 5.6 million is just the final run. It doesn't include all the research and experiments before it. But still, it showed that clever engineering can beat brute force.

Sources and ⚑:
- **DeepSeek-V3 technical report (Dec 2024):** 2.788M H800 GPU-hours × $2/hour (assumed rental) = $5.576M. It explicitly excludes "prior research and ablation experiments". 2,048 H800s, about two months.
- **Nvidia −$589B on 27 Jan 2025:** Bloomberg and Tom's Hardware. "Largest single-day loss in market history."
- ⚑ **Timing:** you said "a few years ago". It was Dec 2024 – Jan 2025, about 1¾ years before the workshop. "Last year" or "early 2025" is more accurate.
- ⚑ **OpenAI's spending:** you mentioned OpenAI claiming it needed "X million". The only firm public figure I found is Altman's "more than $100M" for GPT-4. Note that it compares GPT-4's whole cost with DeepSeek's final run only, which is why the click-3 footnote is there.

---

## Scene 14: Frontier (closed) vs open

**On screen**
- The full word cloud returns one last time.
- **Click 1:** a vertical line splits the screen, and every name slides to its side:

| 🔒 Frontier / closed (use it through their app or API) | 🔓 Open weights (download and run it yourself) |
|---|---|
| ChatGPT · Claude · Gemini · Grok | DeepSeek · Qwen · GLM · MiniMax · Kimi |
| Opus · Fable · Sonnet · Haiku | Mistral · Gemma · Phi · Llama |
| Astra · Sol · Luna · Terra · GPT-5.4 · GPT-5.5 | Whisper · Kokoro · YOLO |
| Muse | LTX · Wan · Z-Image · Stable Audio |

- **Click 2 (optional):** two pairs light up with a line between them, Gemini ↔ Gemma and Muse ↔ Muse Glimmer: "same company, both sides".

**Speaker notes**
> One more thing on models. There are basically two camps. *(click)* On this side, the frontier, closed models. ChatGPT, Claude, Gemini, Grok. You can use them, but you can't download them; they run on the company's servers. On this side, the open ones. DeepSeek, Qwen, Llama, Mistral, and all those tools like Whisper and YOLO. You can download them and run them on your own machine, which matters if your data is sensitive.
> *(click)* And some companies play both sides. Google has Gemini, closed, and Gemma, open. Meta has Muse, closed, and Muse Glimmer, open.

Notes:
- **Accuracy:** most "open" models are open *weights* (you can download and run them), not fully open source (the training data and code usually aren't released). The slide says "open weights" for that reason; in speech, "open" is fine.
- **Grok:** xAI released the weights of some *older* Grok versions, but current Grok is closed.
- **Muse:** Muse Spark is closed (Meta promised to open Spark 1.2's weights, but hadn't as of Sep 2026). Muse Glimmer (30B, Apache 2.0) is open.
- **Mistral:** Mistral's lineup includes both open and closed models. It sits on the open side here for its open releases.

---

# Part 4 · Output

> **Section divider on screen:** the Input → Model → Output row, with **Output** lit.

## Scene 15: Numbers back into media (the rewind)

**On screen**
- The same big visuals as Scenes 7–9, played **in reverse**: numbers stream *out* of the model on the right and reassemble on the left.

| Click | What happens |
|---|---|
| 1 | Numbers fly out → become pixels → the pixels snap together into a picture |
| 2 | Numbers fly out → become a sound wave → it plays |
| 3 | Numbers fly out → become tokens → the tokens join into a sentence |

**Speaker notes**
> So the output is simple. If we can turn media into numbers, we can turn numbers back into media. It's just the reverse of what we did on the input. *(click)* Numbers into a picture. *(click)* Numbers into sound. *(click)* Numbers into words.

---

## Scene 16: Not every model can output everything

**On screen**
- A big grid. The columns are what comes **out**: 📝 Text · 🖼 Image · 🎬 Video · 🔊 Audio. Ticks pop in one row per click.

| Model | 📝 Text | 🖼 Image | 🎬 Video | 🔊 Audio |
|---|---|---|---|---|
| Claude (Opus, Sonnet…) | ✓ |  |  |  |
| GPT-6 Astra (+ GPT Image tool) | ✓ | ✓ *via GPT Image* |  |  |
| Z-Image |  | ✓ |  |  |
| LTX · Wan |  |  | ✓ |  |
| Stable Audio · MiniMax Music · Kokoro |  |  |  | ✓ |

- **Last click:** the Astra row's image tick splits open to show a second model inside it, GPT Image: "one request, two models working together".

**Speaker notes**
> But here's the thing: not all models can output everything. Claude, for example, is very good at text, but it can't actually draw you an image. GPT, on the other hand, can give you images. Ask Astra for a picture and you get one. *(click)* Then there are models that only make images, only make video, only make audio.
> *(click)* And actually, when Astra gives you a picture, it hands the drawing to a separate image model, GPT Image. One request, two models working together.
> *(click)* So remember the word cloud? ChatGPT is the app; behind it, there are several models working together.
> And here's the twist for today: Claude can't draw a picture, but it can write the *code* that draws it. And that's exactly what we're doing in this workshop.

Notes:
- **Astra and images:** in practice, yes. Ask Astra (in ChatGPT or the API) for an image and you get one. Technically, OpenAI's model page lists Astra's output modality as **text only**, with `image_generation` as a supported *tool*. The pixels come from **GPT Image** (2.5, Sep 2026). The grid shows both, "✓ via GPT Image", so it's right for the room and still holds if an expert checks the spec.
- **Claude:** Anthropic says Claude "doesn't generate photos or illustrations". It does make SVGs, charts and interactive pages, which is the bridge to the workshop.
- The grid only uses models we've verified, or that we used ourselves for the promo (Z-Image, LTX, Wan, Stable Audio, MiniMax Music, Kokoro).
- ⚑ You may want a Google row (Gemini plus its image and video models) and a Grok row. I haven't verified their current output models yet. Say if you want them, and I'll check.

---

## Scene 17: How much is a token? (the slider)

> **Built:** `slides/scenes/17-tokens/index.html` is a single self-contained file (edit `src.html`, then run `uv run --no-project --python 3.12 python build.py`).
> - **Controls:** a slider (1 → 1M, log scale) with clickable stops, and a model dropdown (21 models).
> - **Cost:** shown in RM, for both writing (output) and reading (input), with an editable RM/US$ rate.
> - **Compare all:** opens a ranked bar chart.
> - **Keys:** ← → step between stops (works with a presenter clicker), 1–7 jump to a stop, C compare, W switch read/write.

**On screen**
- A big horizontal **slider**, log scale, from 1 to 1,000,000 tokens. Drag it (or click through the stops), and the picture on the right grows from a word piece to a bookshelf:

| Stop | Tokens | Picture | Caption |
|---|---|---|---|
| 1 | **1** | One word piece glowing | ≈ a word, or part of one ("workshop" = 1, "penyelidikan" = 3) |
| 2 | **10** | One sentence | ≈ a short sentence ("Bring your paper to the workshop." = 7) |
| 3 | **100** | A paragraph | ≈ a paragraph (about 75 English words) |
| 4 | **1,000** | One journal page | ≈ one page of a journal article |
| 5 | **10,000** | A 10-page PDF | ≈ one 10-page paper |
| 6 | **100,000** | A paperback novel | ≈ a full novel |
| 7 | **1,000,000** | A bookshelf: 85 papers / 5 Harry Potter books | ≈ **85 IIUM papers**, or the first five Harry Potter books |

**Last click: the price tag.** A price tag swings onto the 1,000,000 stop, and a small price board slides up beneath the slider:

| Model | Reading (input), per 1M tokens | Writing (output), per 1M tokens | One 10-page paper read + a 1-page summary written |
|---|---|---|---|
| Claude Fable 5.1 · GPT-6 Astra (the top tier) | $10 | $50 | ≈ RM 0.64 |
| Claude Opus 5.5 | $4 | $20 | ≈ RM 0.25 |
| Claude Sonnet 5.5 · GPT-6 Sol | $2 | $10 | ≈ RM 0.13 |
| Claude Haiku 4.5 | $1 | $5 | ≈ RM 0.06 |
| DeepSeek (V3.2) | $0.28 | $0.42 | ≈ RM 0.01 |
| GPT-6 Luna | $0.10 | $0.50 | < 1 sen |

On screen, keep only the **headline**: "Reading a whole paper: **under 1 sen to ~60 sen**. Writing costs about **5×** more than reading."

**Speaker notes**
> One more thing you'll hear all the time: tokens. Chatbots count, limit and charge everything in tokens. So how much is a token? *(slide)* One token is about one word, or a piece of a word. Ten tokens is a short sentence. A hundred, a paragraph. A thousand tokens is about one page of a journal article. Ten thousand is about a 10-page paper, one of yours. A hundred thousand, a whole novel. And a million tokens? That's about 85 of your papers. Or the first five Harry Potter books.
> And Malay text uses about twice as many tokens as English for the same meaning, so keep that in mind.
> *(click)* And this is how they charge you. It's priced per million tokens, and reading is cheaper than writing. Usually writing costs about five times more. So for a top model like Claude Opus, reading one of your 10-page papers and writing you a one-page summary costs about 25 sen. The very best models, about 60 sen. The cheap ones, less than one sen. So it's not the cost per question that adds up. It's when you run thousands of them, or when agents run for hours, which we'll get to next.

Pricing sources and ⚑ (checked 4 Oct 2026; prices change often, so re-check the week of the workshop):
- **Claude:** Anthropic's API reference, cached 25 Sep 2026: Fable 5.1 $10/$50, Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 4.5 $1/$5.
- **GPT-6:** Astra $10/$50, Sol $2/$10, Luna $0.10/$0.50. Several independent sites agree (OpenRouter, MarkTechPost, Yotta Labs), but I didn't open OpenAI's own pricing page.
- **DeepSeek V3.2:** $0.28 / $0.42, from third-party price trackers. DeepSeek also has V4 models with peak and off-peak prices; I used V3.2 because it's the simple flat rate.
- **Ringgit:** RM 4.08 per US$ (BNM reference rate, early Oct 2026).
- **The per-paper column:** 10,600 tokens in (our measured median for a 10-page paper) + 1,000 tokens out. It uses OpenAI's token count; Claude's tokenizer can count up to ~1.35× more, which doesn't change the order of magnitude.
- These are **API** (pay-per-use) prices. Most lecturers will use the chat apps on a monthly plan instead, where you pay a flat fee and hit usage limits rather than a bill. ⚑ If you want monthly plan prices on the slide, I'll look them up. I haven't verified them.

How these numbers were measured, and ⚑:
- **Measured on our own data:** I ran all **105 readable IIUM papers** in `papers/` through OpenAI's tokenizer (`o200k_base`), on 4 Oct 2026.
  - Median: **~890 tokens per page** and **~11,600 tokens per paper** (median length 14 pages).
  - The 10-page papers range from **6,400 to 21,600** tokens (median ≈ 10,600), so "≈ 10,000" is fair.
  - 1,000,000 ÷ 11,600 ≈ **86 papers**.
- Academic PDFs run at **~1.76 tokens per word**, because references, numbers, formulas and symbols cost extra. Plain English prose is ~1.3 tokens per word (OpenAI's rule of thumb: 1 token ≈ ¾ of a word). The paragraph and novel stops use the prose rate.
- **Novel:** 100,000 tokens ≈ 75,000 words, a typical paperback length.
- **Harry Potter, approximate:** books 1–5 total about 717,000 words. Those are commonly cited counts, which I haven't checked against a primary source. That makes ≈ 0.95 million tokens at the prose rate, so "the first five books" ≈ 1M is a fair round figure. ⚑ Swap it for something more local if you prefer: "about 85 of your papers" is our own measured number.
- **Malay:** "Bawa kertas penyelidikan anda ke bengkel ini." = 13 tokens vs 7 for the English. One sentence is an example, not a measured average, so say "about twice", not exactly 2×.
- Other models' tokenizers differ by maybe ±20%. These are orders of magnitude, not exact figures.
- ⚑ Optional extra marker on the slider, "how much a chatbot can read at once": several current models take about **1 million tokens** (Muse Spark's documented context is 1M). I haven't verified the current limits for Claude and GPT-6, so leave this off unless you want me to check.

---

## Scene 18: Recap (three questions to ask)

**On screen**
- The Input → Model → Output row returns, big. Each click lights one block, and that block unfolds downward into its questions. Only a few words; the questions do the work.

| Click | Block | Questions that drop out under it |
|---|---|---|
| 1 | **Input** | What form is it in? 🖼 Image · 🔊 Voice · 📝 Text · 🔢 Numbers |
| 2 | **Model** | What's your budget? (RM) · What size? (1B → 1T) · Fast or smart? |
| 3 | **Output** | What do you need back? 📝 Text · 🖼 Image · 🎬 Video · 🔊 Audio · 💻 Code |
| 4 (optional) | **All three** | Filled in for today: Input = **your paper** (PDF + figures) → Model = **a frontier chatbot**, a few sen per paper → Output = **code** that becomes a working animation |

- For the Model block, "Fast or smart?" could be a small see-saw icon (speed on one side, quality on the other) instead of words.

**Speaker notes**
> So, to recap. Whenever you want to use AI for something, think about three things.
> *(click)* First, the input. What form is your data in? Is it images, voice, text, numbers? Remember, it all has to become numbers in the end.
> *(click)* Second, the model. What's your budget? What size of model do you need? A small one that runs on your laptop, or a big one in the cloud? And there's always a trade-off between speed and performance. The smarter models are slower and cost more; the fast ones are cheaper but less capable.
> *(click)* And third, the output. What do you actually need back? Text? An image? Audio? Or, like today, code?
> *(click)* So for today: your input is your paper. The model is one of these frontier chatbots, and it costs you a few sen. And the output is code, which becomes a working animation of your research.

Notes:
- "Fast or smart" ties back to Scenes 11 and 17: bigger and pricier models (Fable, Astra, Opus) are slower but stronger, while the small ones (Haiku, Luna, Flash) are fast and cheap. No new claims here, so nothing new to verify.
- Click 4 sets up the hands-on part. Drop it if Agents comes first.

---

# Part 5 · Agents

> **Section divider on screen:** to be decided. One idea is that the row loops back on itself (output feeds into the next input), which visually introduces what an agent is.

*Waiting for dictation.*
