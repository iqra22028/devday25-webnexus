# 🚀 DevDay25 – ChatGPT Debug Log

This file records the actual issues I faced during my project, and how ChatGPT helped me fix them — from animation to JavaScript bugs to pushing on GitHub.

---

## 🖼️ 1. How to add continuous image scroll animation?

I asked how to make images scroll horizontally across the screen in a loop.

**ChatGPT's help**:  
It guided me to use a container with `overflow: hidden`, and a wrapper using the `scrollImages` keyframes animation to move the images from right to left continuously. Also suggested proper `flex` layout and smooth `@keyframes`.

✅ **Worked perfectly**.

---

## 🔊 2. Why isn’t the song playing?

I wanted a song to autoplay when the page loads, but it wasn’t working.

**ChatGPT's help**:  
Explained that most browsers block autoplay for audio. Suggested I play the song **on user interaction**, like clicking anywhere. Then rewrote the entire JS with a proper `audio.play()` inside a `click` event.

✅ **Song plays when I click now**.

---

## 🎯 3. Button not working?

My play button or interaction wasn’t triggering the sound.

**ChatGPT's help**:  
Found that the event listener wasn’t connecting properly. Fixed the selector and event handler, and advised checking the browser console for any errors.

✅ **Button working fine after that**.

---

## 🎨 4. Smooth transitions & animations

I asked how to create fade-in, scale-up, and slide animations on headings and sections.

**ChatGPT's help**:  
Provided multiple CSS keyframes like `fadeInUp`, `slideInFromRight`, `fadeInZoom` and showed how to delay animations for cool effects. Also fixed duplicate keyframes and cleaned up messy CSS.

✅ **Now the whole site feels alive** ✨

---
