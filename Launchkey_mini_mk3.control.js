loadAPI(12);

// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);

host.defineController("Leszek", "Launchkey_mini_mk3", "0.1", "d816b010-8d3e-40d0-b7b3-38bcbb84dde8", "Leszek");

host.defineMidiPorts(1,1);

const CONTROL_STATUS = 0xB6

function channelCallback(status, data1, data2){
   printMidi(status, data1, data2);
   if(status == CONTROL_STATUS && data2 === 127){
      host.println("control activity");
   }
}

function init() {

   var midiPort0 = host.getMidiInPort(0);
   midiPort0.setMidiCallback(channelCallback);
   // TODO: Perform further initialization here.
   println("Launchkey_mini_mk3 initialized!");
}


function flush() {
   // TODO: Flush any output to your controller here.
}

function exit() {

}