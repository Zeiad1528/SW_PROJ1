const string1 = "workflow 1";
const string2 = "workflow 2";
const string3 = "workflow 3";
const string4 = "workflow 4";
const string5 = "workflow 5";
const string6 = "workflow 6";
const string7 = "workflow 7";
const string8 = "workflow 8";
const string9 = "workflow 9";
const string10 = "workflow 10";
const string11 = "workflow 11";
const string12 = "workflow 12";



const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workflowSchemas = new Schema({

   
        issueType: {
          type: mongoose.Schema.Types.ObjectId(),
          ref: "sub_issues",
          required: true,
          select: 'issueType'
         },

         issueSol: {
          sub_issues: {
            type: [String],
            validate: {
              validator: function() {
                switch (this.issueType) {
                  case 'Desktops':
                    return 'Check for updates: Make sure your operating system and drivers are up-to-date. Go to the settings menu and click on "Update & Security" to check for any available updates.' + "\n" + 'Restart your computer: Sometimes, simply restarting your computer can fix minor issues. This will give your system a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Run a virus scan: If you suspect that a virus or malware may be causing your desktop issues, run a virus scan using an antivirus program.' + "\n" + 'Check your hardware: If you hace tried all the software solutions and still can notresolve the issue, it may be a hardware problem. Check your RAM, hard drive, and graphics card to make sure they are properly seated and functioning correctly.';
                  case 'Laptops':
                    return 'Check for updates: Make sure your operating system and drivers are up-to-date. Go to the settings menu and click on "Update & Security" to check for any available updates.' + "\n" + 'Restart your laptop: Sometimes, simply restarting your laptop can fix minor issues. This will give your system a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Run a virus scan: If you suspect that a virus or malware may be causing your laptop issues, run a virus scan using an antivirus program. This will help identify and remove any malicious software that may be affecting your systems performance.' + "\n" + 'Check your hardware: If you have tried all the software solutions and still can not resolve the issue, it may be a hardware problem. Check your RAM, hard drive, and graphics card to make sure they are properly seated and functioning correctly. You may also want to consider cleaning out any dust or debris that has accumulated inside your laptop case.' + "\n" + 'Adjust power settings: Make sure your laptops power settings are optimized for performance rather than battery life. This can help improve its overall performance and speed up certain tasks.';
                  case 'Printers':
                    return 'Check the printers connections: Make sure your printer is properly connected to your computer or network. Check the power cord, USB cable, or Ethernet cable to ensure they aresecurely plugged in.' + "\n" + 'Restart the printer: Sometimes, simply restarting the printer can fix minor issues. Turn off the printer, wait for 30 seconds, and then turn it back on.' + "\n" + 'Check the ink or toner levels: Make sure your printer has enough ink or toner to complete the task you are trying to print. Low ink or toner levels can cause printing errors or stoppages.' + "\n" + 'Clean the printer: Over time, dust and debris can accumulate inside your printer, causing printing issues. Use a soft, dry cloth to clean the exterior of the printer and a small brush or compressed air to clean the inside of the printer.' + "\n" + 'Check the print settings: Make sure your print settings are correct for the type of document you are printing. Check the paper type, orientation, and color settings to ensure they match your needs.' + "\n" + 'Update the printer driver: Go to the manufacturers website and download the latest driver for your printer. This will help ensure compatibility with your operating system and resolve any software-related issues.';
                  case 'Servers':
                    return 'Check the servers connections: Make sure your server is properly connected to your network and power source. Check the network cables, power cords, and any other connections to ensure they are securely plugged in.' + "\n" + 'Restart the server: Sometimes, simply restarting the server can fix minor issues. This will give your system a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check the server logs: Review the server logs to identify any errors or issues that may be causing problems. This can help you narrow down the cause of the issue and find a solution.' + "\n" + 'Update the server software: Make sure your server software is up-to-date with the latest patches and updates. This will help ensure compatibility with your operating system and resolve any software-related issues.' + "\n" + 'Check the servers resources: Make sure your server has enough resources (such as RAM, CPU, and storage) to handle your workload. If your server is running low on resources, this can cause performance issues or stoppages.' + "\n" + 'Check the network traffic: Make sure your network is not overloaded with traffic, as this can cause performance issues or stoppages on your server. Consider implementing network optimization strategies such as load balancing or network segmentation to distribute traffic more efficiently.';
                  case 'Networking equipment':
                    return 'Check the connections: Make sure all network equipment, such as switches, routers, and modems, are properly connected to each other and to your computers. Check the cables and connections to ensure they are securely plugged in.' + "\n" + 'Restart the equipment: Sometimes, simply restarting the equipment can fix minor issues. This will give your system a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check the lights: Make sure all the lights on your network equipment are on and blinking as expected. This can help you identify any connectivity issues or hardware failures.' + "\n" + 'Check the IP addresses: Make sure each device on your network has a unique IP address and is configured correctly. This can help prevent conflicts and ensure proper communication between devices.' + "\n" + 'Update the firmware: Make sure your network equipment is running the latest firmware version. This will help ensure compatibility with your operating system and resolve any software-related issues.' + "\n" + 'Check for interference: Make sure there are no sources of interference, such as other wireless networks or electrical devices, that may be causing issues with your network signal. Consider implementing strategies such as channel selection or antenna placement to mitigate interference.';
                  case 'Operating system':
                    return 'Restart the computer: Sometimes, simply restarting your computer can fix minor issues. This will give your system a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check for updates: Make sure your operating system is up-to-date with the latest patches and updates. This will help ensure compatibility with your hardware and resolve any software-related issues.' + "\n" + 'Run a scan for viruses and malware: Use an antivirus program to scan your computer for any viruses or malware that may be causing issues. Remove any threats that are found.' + "\n" + 'Check the disk space: Make sure your computer has enough free disk space to operate properly. If your disk is running low on space, this can cause performance issues or stoppages.' + "\n" + 'Check the hardware: Make sure all hardware components, such as the RAM, CPU, and hard drives, are functioning properly. Consider running a diagnostic tool to check for hardware failures or errors.' + "\n" + 'Disable unnecessary services: Disable any unnecessary services or programs that may be running in the background and causing resource conflicts or performance issues.';
                  case 'Application software':
                    return 'Check for updates: Make sure the application software is up-to-date with the latest patches and updates. This will help ensure compatibility with your operating system and resolve any software-related issues.' + "\n" + 'Restart the application: Sometimes, simply restarting the application can fix minor issues. This will give the software a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check for conflicts: Make sure the application is not conflicting with other software installed on your computer. Consider disabling or uninstalling any conflicting software to see if this resolves the issue.' + "\n" + 'Check for compatibility: Make sure the application is compatible with your operating system and hardware components. If you are running an older version of the software, consider upgrading to a newer version that is more compatible with your system.' + "\n" + 'Disable add-ons: Disable any add-ons or plugins that may be causing issues with the application. This can help prevent conflicts and improve performance.' + "\n" + 'Check for viruses and malware: Use an antivirus program to scan your computer for any viruses or malware that may be causing issues with the application. Remove any threats that are found.';
                  case 'Custom software':
                    return 'Check the software documentation: Make sure you have a thorough understanding of how the custom software is intended to function. Review the documentation provided by the software developer to ensure you are using the software correctly.' + "\n" + 'Restart the software: Sometimes, simply restarting the software can fix minor issues. This will give the software a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check for updates: Make sure the custom software is up-to-date with the latest patches and updates. This will help ensure compatibility with your operating system and hardware components.' + "\n" + 'Check for conflicts: Make sure the custom software is not conflicting with other software installed on your computer. Consider disabling or uninstalling any conflicting software to see if this resolves the issue.' + "\n" + 'Check for compatibility: Make sure the custom software is compatible with your operating system and hardware components. If you are running an older version of the software, consider upgrading to a newer version that is more compatible with your system.' + "\n" + 'Disable add-ons: Disable any add-ons or plugins that may be causing issues with the custom software. This can help prevent conflicts and improve performance.' + "\n" + 'Check for viruses and malware: Use an antivirus program to scan your computer for any viruses or malware that may be causing issues with the custom software. Remove any threats that are found.' + "\n" + 'Contact the software developer: If you are still having issues after trying all these steps, contact the software developer for assistance in diagnosing and resolving more complex custom software issues. They may be able to provide additional guidance or support based on your specific situation.' ;
                  case 'Integration issues':
                    return 'Check the integration documentation: Make sure you have a thorough understanding of how the software applications are intended to integrate. Review the documentation provided by the software developer to ensure you are integrating the applications correctly.' + "\n" + 'Restart the applications: Sometimes, simply restarting the applications can fix minor issues. This will give the applications a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check for updates: Make sure both applications are up-to-date with the latest patches and updates. This will help ensure compatibility and prevent integration issues caused by outdated software versions.' + "\n" + 'Check for conflicts: Make sure there are no conflicts between the applications or their configurations. Consider disabling or uninstalling any conflicting software to see if this resolves the issue.' + "\n" + 'Check for compatibility: Make sure both applications are compatible with your operating system and hardware components. If you are running an older version of either application, consider upgrading to a newer version that is more compatible with your system.' + "\n" + 'Disable add-ons: Disable any add-ons or plugins that may be causing issues with the integration between the applications. This can help prevent conflicts and improve performance.' + "\n" + 'Check for viruses and malware: Use an antivirus program to scan your computer for any viruses or malware that may be causing issues with the integration between the applications. Remove any threats that are found.';
                  case 'Email issues':
                    return 'Check the integration documentation: Make sure you have a thorough understanding of how the software applications are intended to integrate. Review the documentation provided by the software developer to ensure you are integrating the applications correctly.' + "\n" + 'Restart the applications: Sometimes, simply restarting the applications can fix minor issues. This will give the applications a chance to clear out any temporary files or processes that may be causing problems.' + "\n" + 'Check for updates: Make sure both applications are up-to-date with the latest patches and updates. This will help ensure compatibility and prevent integration issues caused by outdated software versions.' + "\n" + 'Check for conflicts: Make sure there are no conflicts between the applications or their configurations. Consider disabling or uninstalling any conflicting software to see if this resolves the issue.' + "\n" + 'Check for compatibility: Make sure both applications are compatible with your operating system and hardware components. If you are running an older version of either application, consider upgrading to a newer version that is more compatible with your system.' + "\n" + 'Disable add-ons: Disable any add-ons or plugins that may be causing issues with the integration between the applications. This can help prevent conflicts and improve performance.' + "\n" + 'Check for viruses and malware: Use an antivirus program to scan your computer for any viruses or malware that may be causing issues with the integration between the applications. Remove any threats that are found.';
                  case 'Internet connection problems':
                    return 'check your internet connection: Make sure your device is connected to the internet. You can do this by checking the network icon in the system tray or by trying to access a website.' + "\n" + 'Restart your modem and router: Unplug your modem and router for 30 seconds, then plug them back in. This can help reset your connection and resolve any temporary issues.' + "\n" + 'Check for outages: Visit the website of your internet service provider (ISP) to check for any reported outages in your area. If there is an outage, you may need to wait for it to be resolved.' + "\n" + 'Test your connection speed: Use a speed test tool to check the speed of your internet connection. If the speed is significantly lower than what you arepaying for, contact your ISP to troubleshoot the issue.' + "\n" + 'Disconnect other devices: If you have multiple devices connected to your network, try disconnecting them to see if this improves your connection speed and reliability.' + "\n" + 'Check for interference: Make sure there are no other devices or objects that could be interfering with your Wi-Fi signal, such as microwaves, cordless phones, or other wireless devices.' + "\n" +  'Update your network driver: Make sure your network driver is up-to-date by visiting the manufacturers website and downloading the latest driver for your device.' + "\n" + 'Use a wired connection: If possible, connect your device directly to your modem using an Ethernet cable instead of relying on Wi-Fi. This can help improve reliability and speed.' + "\n" + 'Contact your ISP: If you have tried all these steps and are still experiencing connection problems, contact your ISP for further assistance in diagnosing and resolving the issue. They may be able to provide additional guidance or support based on your specific situation.';
                  case 'Website errors':
                    return 'Refresh the page: Sometimes, simply refreshing the page can fix minor errors or glitches. Press the F5 key on your keyboard or click the refresh button in your browser to try this.' + "\n" + 'Clear your browser cache: Over time, your browser may accumulate cached files that can cause errors or prevent updates from being displayed. To clear your cache, go to your browser settings and select the option to clear browsing data.' + "\n" + 'Check your internet connection: Make sure you have a stable internet connection. You can do this by checking the network icon in the system tray or by trying to access a different website.' + "\n" + 'Disable browser extensions: Some browser extensions can cause conflicts with websites, leading to errors or crashes. Try disabling any extensions you are not currently using to see if this resolves the issue.' + "\n" + 'Check for website maintenance: Some websites may be undergoing maintenance or updates, which can cause errors or downtime. Check the websites social media accounts or contact their support team to confirm if there are any known issues.' + "\n" + 'Try a different browser: If you are having issues with a specific browser, try accessing the website using a different browser to see if this resolves the issue.' + "\n" + 'Use a different device: If you are having issues accessing the website on one device, try accessing it on a different device to see if this resolves the issue.' ;
                  default:
                    return true; // Other issue types are allowed to have any sub-issues
                }
              }
            }
        }
        },
      
      agentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agent_schema",
        required: true
      },

      assignedAgent:{
        type:String,
        enum:['agent1','agent2','agent3','waiting']
      },

        mainIssue:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "ticketSchema",
          required: true,
          select: 'mainIssue'
         },

      
        
     

})
const Workflow = mongoose.model('Workflow', workflowSchemas);
module.exports = Workflow;