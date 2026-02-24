# Lessons Not Loading - Troubleshooting Guide

## Quick Checks:

### 1. Is the server running?
Make sure you ran:
```bash
node server.js
```

You should see:
```
🔥💧 Physics Game Server running at http://localhost:3000
```

### 2. Open the browser console
1. Open http://localhost:3000
2. Press F12 (or Right-click → Inspect)
3. Click "Console" tab
4. Click a topic button (e.g., "⚡ Motion")
5. Look for errors (red text)

### 3. What do you see?

**If you see "Loading explanation..." that never changes:**
- The fetch request is failing
- Check console for errors
- Server might not be responding

**If you see nothing at all:**
- JavaScript might not be loading
- Check console for errors
- Check if study.js is loaded

**If you see an error message:**
- Copy the error and let me know

## Common Issues:

### Issue 1: "Failed to fetch explanation"
**Cause:** Server endpoint not responding

**Fix:** Check server terminal for errors

### Issue 2: Topic button doesn't respond
**Cause:** JavaScript not loaded or error

**Fix:** 
1. Check browser console for errors
2. Make sure study.js is loading
3. Try refreshing page (Ctrl+R)

### Issue 3: "Loading explanation..." stays forever
**Cause:** Server is taking too long or crashed

**Fix:**
1. Check server terminal - is it still running?
2. Restart server: Ctrl+C then `node server.js`
3. Try again

### Issue 4: Blank explanation box
**Cause:** Response is empty or malformed

**Fix:** Check browser console Network tab:
1. Press F12 → Network tab
2. Click a topic button
3. Look for "ai-explain" request
4. Click it and check "Response" tab
5. Should show JSON with explanation

## Testing Steps:

### Step 1: Test Server Endpoint Directly
Open a new terminal and run:
```bash
curl -X POST http://localhost:3000/ai-explain -H "Content-Type: application/json" -d "{\"topic\":\"Motion\"}"
```

Should return JSON with explanation text.

### Step 2: Test in Browser Console
1. Open http://localhost:3000
2. Press F12 → Console
3. Paste this code:
```javascript
fetch('/ai-explain', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({topic: 'Motion'})
})
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.error(e));
```
4. Press Enter
5. Should see the explanation in console

### Step 3: Check Network Tab
1. Press F12 → Network tab
2. Click "⚡ Motion" button
3. Look for "ai-explain" request
4. Status should be "200 OK"
5. Click it and check Response

## What to Check:

- [ ] Server is running
- [ ] No errors in server terminal
- [ ] No errors in browser console
- [ ] Topic button turns cyan when clicked
- [ ] "Loading explanation..." appears
- [ ] Explanation text appears after loading

## Debug Mode:

The code already has console.log statements. When you click a topic, you should see in console:
```
Topic selected: Motion
```

If you don't see this, the button click isn't working.

## Quick Fix:

Try refreshing the page:
1. Press Ctrl+Shift+R (hard refresh)
2. Click a topic button
3. Check if it works now

## Still Not Working?

Tell me:
1. What do you see when you click a topic button?
2. Any errors in browser console? (copy them)
3. Any errors in server terminal? (copy them)
4. Does "Loading explanation..." appear?
5. What happens after that?

I'll help you fix it! 🔧
