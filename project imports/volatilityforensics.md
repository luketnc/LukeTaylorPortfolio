We have found a windows install! lets check logs

Go here: /media/oxide/966E4AAC6E4A8549/Windows/System32/config/

Open in root terminal
- 'sudo chntpw -e SYSTEM'
Opens up registry reader

ls to see everything
 in this case we will cd into Select and cat Current
 
 \Select> cat Current
Value <Current> of type REG_DWORD (4), data length 4 [0x4]
0x00000001

## Get Name
now we will look at control set 01 by going back to select and CD into it
- cd ControlSet001/Control/ComputerName/ComputerName
- cat ComputerName
	- **DESKTOP-04KK62S**

## OS 'Personailty'
Now we want to figure out what exactly we have on our hands

again we will run 
- sudo chntpw -e SOFTWARE

first we will get product name
- cd \Microsoft\Windows NT\CurrentVersion
- cat productname

**Windows 10 Home**

- cat InstallationType
**Client**

- cat RegisteredOwner
 
## Internet and Network History
go back to software
- cd Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles

SHOULD be networks in here, but there arent

going into signatures unmanaged and managed also yeilds no results

on to the system node to see if it can put us on to some sweet ip info

- cd ControlSet001\Services\Tcpip\Parameters\Interfaces

this is whats up- we see 6 ID folders
we will cd each one of these and cat output

no dice

we checked logs to no real avail too

## Check Out SAM (Secure Accounts management)
we will boot up regedit again but look in SAM

lets peep here first specifically
- cd \SAM\Domains\Account\Users\Names

We see some cool stuff! lets get into it

no dice AGAIN

(...)\Account\Users\Names\WDAGUtilityAccount> ls
Node has 0 subkeys and 1 values
  size     type              value name             [value if type DWORD]
     0  1f8 (unknown)          <>

(...)\Account\Users\Names\WDAGUtilityAccount> cd..
Unknown command: cd.., type ? for help

(...)\Account\Users\Names\WDAGUtilityAccount> 

WDAG utility account means its a hardened build Windows 11 most likely

## Auto Login Check
back to regedit Software
- cd Microsoft\Windows NT\CurrentVersion\Winlogon

AutoAdminLogon = 1
defaultUsername = defualtuser0
Lastused username = defualtuser0
shell = explorer.exe


## Unstructured data check
we need that network info broh

couldnt find it looking in sys logs

##Run SAM Dump to extract passwords
we need to sump the hashes so we can try and crack
- sudo samdump2 SYSTEM SAM
*disabled* Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
*disabled* Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
*disabled* :503:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
*disabled* :504:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
defaultuser0:1000:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
                  
no passwords

## Try to find browser Treasures
first we pull up on 
/media/oxide/966E4AAC6E4A8549/Users/defaultuser0/AppData/Local/Microsoft/Windows/WebCache/

then we download libesedb-utils
\now we conver the web cache we found into a bunch of csvs we can dick around with

no dice on export, we will try windows tool later so we copy over web cache to our machine to use windows on later

## Vol3
Volatiloty allows us to dump the hibernation file to a raw setup. We would be able to use the plugins but bc this is a retail demo unit it has weird memory signatures.

we write our raw file
- vol -f hiberfil.sys layerwriter.LayerWriter

this didnt work bc we are trying to write in read only, lets write it to our root
- vol -f hiberfil.sys -o /root/ layerwriter.LayerWriter

grepping is taking forever and killing my RAM so im moving to windows



## Dokany and MemProc
Using dokany we can mount the server info

Memproc is nowmounted so we can look through


not much going on here :(



## Conclusion
This investigation ultimately didnt yeild much but not all investigations do. Ultimately I learned a lot about digital forensics and how to use tools like volatility, as well as how to make scripts that work for me that may help next time. At least we were able to figuire out that this was likely some kind of a shelf display unit















## Use formost to find old deleted files


                  
                  
                  













