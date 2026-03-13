export const projectsData = [
    {
        id: "ransomware-and-least-privilege",
        slug: "ransomware-and-least-privilege",
        title: "Ransomeware And Least Privilege",
        oneLiner: "Guide to how to prevent ransomeware attacks using least privilege.",
        category: "Test",
        tags: ["Least-Privilege", "Malware"],
        status: "Archived",
        featured: false,
        content: `
## Least Privilege
Least privilege (POLP) is the idea that user access needs to be limited to only allows users to access what's necessary for their job
In this slide lab we will be focusing on the access rights aspects of least privilege to make sure that users have just enough access to do their jobs
Least privilege is also a method of preventing the spread of malware, which will be explained later in the slides

## File Sharing on a Windows Server
File sharing on a Windows Server is interesting because it doesn't work like an FTP server as one might expect
Instead it uses a SMB (Server Message Block) protocol, which allows users to access files on a network as if they were on the local drive
Security controls and permission are important to configure for shared drives because they can be exploited and sometimes be the target of ransomware

## Methadology and Tools
The tools used in this project are:
Windows Server Management Tools
RanSim malware script
Windows Powershell

<img src="nullgarden\public\images\ransomware-least-priv\ransom-1.png" alt="ransom-1" style="width: 100%; border-radius: 8px;" />

## Setting Up User Accounts
To start, we need to make some user accounts to use in our lab
These users will be local users on the Windows server machine
“John” and “Jane” will work for this purpose
To do this we need to go to computer management inside the Windows server manager, and then under users adding “Jane” and “John”

<img src="nullgarden\public\images\ransomware-least-priv\ransom-2.png" alt="ransom-2" style="width: 100%; border-radius: 8px;" />

## Making a Group
Next we need to make a group for our new users Jane and John
This group will be called CIS and will be designated for the people that work in the CIS department
This group will allow us to configure some privilege settings that will work on the users that are part of our group
For now we will add Jane and John both to CIS

<img src="nullgarden\public\images\ransomware-least-priv\ransom-3.png" alt="ransom-3" style="width: 100%; border-radius: 8px;" />

## Making a Shared Folder
The next step in this process is to make our shared folder
For that we will return once again to the Windows Server settings, and go back to the Computer Management tab
We don't have to configure a share path yet but a description is important, a simple few words is enough

<img src="nullgarden\public\images\ransomware-least-priv\ransom-4.png" alt="ransom-4" style="width: 100%; border-radius: 8px;" />

## Allowing Users or Groups to Edit the Shared Folder
This step is where our shared folder and our newly defined users and associated groups come together
For now we will add the local user group “Administrators” and “CIS” to have access to our new CIS folder
The administrator group already has permissions but CIS has not yet been configured

<img src="nullgarden\public\images\ransomware-least-priv\ransom-5.png" alt="ransom-5" style="width: 100%; border-radius: 8px;" />

## Connect the Folder From the Windows Server to the Azure Machine
From here we will switch from the Windows Server to the Microsoft Azure server and connect to our new file
As we know from previous projects our windows server IP is “192.168.1.2” and our folder is CIS
To put this into Windows shared folder syntax we need to type \\192.168.1.2\cis

<img src="nullgarden\public\images\ransomware-least-priv\ransom-6.png" alt="ransom-6" style="width: 100%; border-radius: 8px;" />

## Login from the Azure Machine
After being prompted with a login screen, we will elect to login as John
Our first step is to check permissions and ensure that we have full permissions (We do)
Our next step is to make a text document that has our name on it
After doing so we will log back in as Jane, checker her permissions, and then delete that document, showcasing that both users can read and write

<img src="nullgarden\public\images\ransomware-least-priv\ransom-7.png" alt="ransom-7" style="width: 100%; border-radius: 8px;" />

## Making Permissions
Now we need to define permissions for the CIS group
For now we will give them basically total access to the CIS folder
To do this we need to remember to change shared folder settings from the windows server where we are admins and not as Jane or John on the Azure machine because we are about to edit their Access

<img src="nullgarden\public\images\ransomware-least-priv\ransom-8.png" alt="ransom-8" style="width: 100%; border-radius: 8px;" />

## Installing Ransim Malware Scripts
Before we edit any users or groups access we need to get RanSim, a Malware Simulation script that is used to test various aspects of security
We will pull it down from github by clicking the latest version and downloading it to our Azure machine
This will go in a new quarantine folder that is excluded from windows defender scans because otherwise it will be blocked

<img src="nullgarden\public\images\ransomware-least-priv\ransom-9.png" alt="ransom-9" style="width: 100%; border-radius: 8px;" />

## Remote Signature Error
Upon trying to run RanSim we run into an error because we do not trust these scripts so we can do that quickly by putting \`\`\`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass\`\`\`
After that we need to navigate into the Quarantine folder so that we can run the RanSim.ps1 script easier

<img src="nullgarden\public\images\ransomware-least-priv\ransom-10.png" alt="ransom-10" style="width: 100%; border-radius: 8px;" />

<img src="nullgarden\public\images\ransomware-least-priv\ransom-11.png" alt="ransom-11" style="width: 100%; border-radius: 8px;" />

## Encyrpting the File as Jane
Next we will run Ransim by typing the “.\RanSim.ps1 -Mode encrypt -TargetPath z:\” command
This will encrypt the files on our shared drive from Jane's account, the same way that a ransomware attack would encrypt files on any drive it can get to

<img src="nullgarden\public\images\ransomware-least-priv\ransom-12.png" alt="ransom-12" style="width: 100%; border-radius: 8px;" />

## File Cannot be Accessed
After inspecting our shared folder from the Windows Server we can see that the file we made earlier can no longer be accessed meaning the encryption was successful
Next it is important to dive into what permissions need to be set to prevent this type of attack in the future

<img src="nullgarden\public\images\ransomware-least-priv\ransom-13.png" alt="ransom-13" style="width: 100%; border-radius: 8px;" />

## Use Case 1: Users in a workgroup need to be able to create documents and allow others to read those documents
Permissions:
Users
Read
Write
Read and execute
List Folder Contents
Reasoning
Users need to be able to read and create 

In this case the ransomware encrypted Jane’s files because she created them (as we saw). However it did not encrypt Johns File.

<img src="nullgarden\public\images\ransomware-least-priv\ransom-14.png" alt="ransom-14" style="width: 100%; border-radius: 8px;" />

## Use Case 2: Users need to view, edit, and delete content in an existing document
Permissions:
Users
Modify
Reasoning
Users need to be able to view edit delete content but do not need to be able to execute anything
In this Case Janes file was encrypted from Johns account, because of the modify ability that regular users have. However if John had a document that wasnt shared it wouldnt be encrypted.

<img src="nullgarden\public\images\ransomware-least-priv\ransom-15.png" alt="ransom-15" style="width: 100%; border-radius: 8px;" />

## Use Case 3: Users create new documents and others can read and modify them
Best Practices for Permissions:
Users
Modify
Reasoning
Users need to be able to view edit delete content but do not need to be able to execute anything

In this case all files will be encrypted because Users are able to encrypt files that they didn't make. This is even more dangerous because every document in the shared computer could be encrypted.

<img src="nullgarden\public\images\ransomware-least-priv\ransom-16.png" alt="ransom-16" style="width: 100%; border-radius: 8px;" />

## Ransomeware Mitigation
Use Case 1 (Users create, others read)
Keep read-only access for most users.
Regular backups of user-created files.
Enable controlled folder access via Windows Defender.
Use Case 2 (Users modify shared documents)
Restrict Modify access to only essential users.
Implement file versioning to restore corrupted files.
Use application whitelisting to block unauthorized scripts.
Use Case 3 (Users create & modify all files)
Use separate folders for different access levels.
Implement Network Segmentation (limit access to specific users).
Apply least privilege principle to minimize exposure.

## Least Privilege Best Practice for This Scenario
The best practice for preventing malware related incidents is this group layout below:
Admins (Specific member or members of IT)
Full control
Reasoning: There are few admins and they are more likely to understand the importance of security and they require the ability to react to potential attacks
CIS
Read Write execute list folder contents
Reasoning: This group needs to be able to create their own files to read write and execute but should not be able to modify others (as we saw with Jane)
Users
Read Write
Reasoning: Users need to be able to Read and write but do not need to list folder contents 

## Best Practice for this Scenario Part 2
Other security measures that could be implemented: 
Make Backups of the shared folder to prevent ransomware from completely stopping operations
Use seperate folders to make sure that access levels are separated
Make sure that passwords must be reset often
Ensure that passwords have a complexity requirement
Use network segmentation to make sure again that only the people that need access have it
Make sure that controlled folder access is enabled in windows defender

        `,

    }


]