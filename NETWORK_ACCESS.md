# Access Game from Other Devices 📱

## Quick Setup (3 Steps)

### Step 1: Find Your Computer's IP Address

**On Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" under your active network adapter (WiFi or Ethernet).
Example: `192.168.1.100`

**On Mac/Linux:**
```bash
ifconfig
```
Look for "inet" under your active network (en0 for WiFi, eth0 for Ethernet).
Example: `192.168.1.100`

### Step 2: Restart Server
```bash
# Stop current server (Ctrl+C)
node server.js
```

You should now see:
```
🔥💧 Physics Game Server running at http://localhost:3000
📱 Access from other devices: http://YOUR_IP_ADDRESS:3000
💡 To find your IP: Run "ipconfig" (Windows) or "ifconfig" (Mac/Linux)
```

### Step 3: Access from Other Device

On your phone, tablet, or another computer (must be on same WiFi):

```
http://YOUR_IP_ADDRESS:3000
```

Replace `YOUR_IP_ADDRESS` with the IP you found in Step 1.

**Example:**
```
http://192.168.1.100:3000
```

## Troubleshooting

### Can't Connect?

**1. Check Firewall**
Windows Firewall might be blocking the connection.

**Allow Node.js through firewall:**
1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Click "Change settings"
4. Find "Node.js" and check both Private and Public
5. If not listed, click "Allow another app" and browse to Node.js

**Or temporarily disable firewall (for testing):**
1. Open Windows Security
2. Go to Firewall & network protection
3. Turn off for Private network (turn back on after testing!)

**2. Check Same Network**
- Both devices must be on the same WiFi network
- Can't connect if one is on WiFi and other on mobile data

**3. Check IP Address**
- Make sure you're using the correct IP
- IP might change if you restart your router
- Use `ipconfig` to verify current IP

**4. Check Port**
- Default port is 3000
- Make sure nothing else is using port 3000
- You can change port in `.env` file: `PORT=8080`

### Still Not Working?

**Try these commands:**

**Windows - Allow port 3000:**
```bash
netsh advfirewall firewall add rule name="Node.js Server" dir=in action=allow protocol=TCP localport=3000
```

**Check if server is listening:**
```bash
netstat -an | findstr :3000
```

Should show: `0.0.0.0:3000` (listening on all interfaces)

## Alternative: Use ngrok (Access from Anywhere)

If you want to access from anywhere (not just local network):

### 1. Install ngrok
Download from: https://ngrok.com/download

### 2. Run ngrok
```bash
ngrok http 3000
```

### 3. Use the URL
ngrok will give you a public URL like:
```
https://abc123.ngrok.io
```

Share this URL with anyone! Works from anywhere in the world.

**Note:** Free ngrok URLs change each time you restart. Paid plans get permanent URLs.

## Security Notes

### Local Network Access:
- ✅ Safe - only accessible on your WiFi
- ✅ No internet exposure
- ✅ Good for testing with friends/family

### Public Access (ngrok):
- ⚠️ Anyone with URL can access
- ⚠️ Don't share sensitive data
- ⚠️ Free tier has bandwidth limits

## Common IP Ranges

Your IP will likely start with:
- `192.168.x.x` (most home networks)
- `10.x.x.x` (some home networks)
- `172.16.x.x` to `172.31.x.x` (less common)

## Quick Reference

| Device | URL |
|--------|-----|
| Same computer | http://localhost:3000 |
| Other device (same WiFi) | http://YOUR_IP:3000 |
| Anywhere (with ngrok) | https://abc123.ngrok.io |

## Example Setup

**Your computer IP:** 192.168.1.100

**Access from:**
- Your computer: http://localhost:3000
- Your phone (same WiFi): http://192.168.1.100:3000
- Friend's phone (same WiFi): http://192.168.1.100:3000
- Tablet (same WiFi): http://192.168.1.100:3000

All devices must be on the same WiFi network!

## Testing

1. Start server: `node server.js`
2. On same computer: Open http://localhost:3000 (should work)
3. Find IP: Run `ipconfig`
4. On phone: Open http://YOUR_IP:3000
5. If doesn't work: Check firewall

## Need Help?

1. Verify server is running
2. Verify both devices on same WiFi
3. Verify correct IP address
4. Check Windows Firewall
5. Try temporarily disabling firewall
6. Check for error messages in terminal

Good luck! 🎮📱
