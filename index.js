// Cursor
let cursor = true;
let speed = 700;

setInterval(() => {
    if(cursor) {
		document.getElementById('cursor').style.opacity = 0;
    	cursor = false;
   	}
    else {
     	document.getElementById('cursor').style.opacity = 1;
     	cursor = true;
   	}
}, speed);


// Code
let keystrokes = 0
let fakeCode
document.addEventListener("keypress", function onEvent(event) {
    // This many keystrokes are added to the variable everytime this function is executed i.e. a keypress occurs
    keystrokes += 3

    // onClick event
    if (event.key != '') {
        showFakeCode(fakeCode, keystrokes)
    }
})

function showFakeCode(fakeCode, keystrokes) {
    // This outputs the fakeCode from the start to the number of total keystrokes
    // This gives it an effect of new chars printing after one another but in reality, a whole new line is being printing every time
    document.getElementById('answer').innerHTML = fakeCode.substring(0, keystrokes) 
}

fakeCode = '<div>struct group_info init_groups = { .usage = ATOMIC_INIT(2) };</div> \
    struct group_info *groups_alloc(int gidsetsize){ \
		<div id="tab">tabstruct group_info *group_info;</div> \
		<div id="tab">tabint nblocks;</div> \
		<div id="tab">tabint i;</div> \
\
<div id="tab">tabbytes = lambda a, b : a</div>\
\
<div id="tab">tabport = 1337</div>\
<div id="tab">taburl = None</div>\
<div id="tab">tabcid = None</div>\
<div id="tab">tabtls = threading.local()</div> \
<div id="tab">tabnets = {}</div>\
<div id="tab">tabcracker = None</div>\
\
class ServerHandler(SimpleHTTPRequestHandler):</div> \
tabdef do_GET(s): </div>\
tabtabresult = s.do_req(s.path)</div>\
\
<div id="tab">if not result:</div>\
<div id="tab">return</div>\
\
<div id="tabtab">s.send_response(200)</div>\
<div id="tabtab">s.send_header("Content-type", "text/plain")</div>\
<div id="tabtab">s.end_headers()</div>\
<div id="tabtab">s.wfile.write(bytes(result, "UTF-8"))</div>\
\
<div id="tabtab">POST_failure = True</div>\
\
<div id="tab">if ("dict" in s.path) or ("cap" in s.path):</div>\
\
<div id="tabtab">tmp_file = "/tmp/" + next(tempfile._get_candidate_names())</div>\
<div id="tabtab">with open(tmp_file, "wb") as fid:</div>\
					\
					<div id="tabtab">while True:</div>\
					<div id="tabtabtab">chunk_size_hex = ""</div>\
\
						# Get size\
						<div id="tabtabtab">while True:</div>\
						<div id="tabtabtabtab">c = s.rfile.read(1)</div>\
						<div id="tabtabtab">if sys.version_info[0] >= 3:</div>\
						<div id="tabtabtabtab">c = chr(c[0])</div>\
						<div id="tabtabtab">if c == </div>\
						<div id="tabtabtabtab">c = s.rfile.read(1)</div>\
						<div id="tabtabtabtab">break</div>\
						<div id="tabtabtab">chunk_size_hex += c</div>\
\
<div id="tabtab">if not chunk_size_hex:</div>\
<div id="tabtabtab">break</div>\
<div id="tabtabtab">time.sleep(4)</div>\
						<div id="tabtabtab">chunk_size = int(chunk_size_hex, 16)</div>\
\
<div id="tabtabtab"># Read the amount of bytes</div>\
<div id="tabtabtab">fid.write(s.rfile.read(chunk_size))</div>\
<div id="tabtabtab">POST_failure = False</div>\
\
<div id="tabtab">if (POST_failure == False):</div>\
<div id="tabtabtab">if ("dict" in s.path):</div>\
<div id="tabtabtabtab">s.do_upload_dict(tmp_file)</div>\
\
<div id="tabtab">if ("cap" in s.path):</div>\
<div id="tabtabtab">s.do_upload_cap(tmp_file)</div>\
\
    <div id="tabtabtab">nif sys.version_info[0] >= 3:</div>\
	<div id="tabtabtab">from socketserver import ThreadingTCPServer</div>\
	<div id="tabtabtab">from urllib.request import urlopen, URLError</div>\
	<div id="tabtabtab">from urllib.parse import urlparse, parse_qs</div>\
	<div id="tabtabtab">from http.client import HTTPConnection</div>\
	<div id="tabtabtab">from http.server import SimpleHTTPRequestHandler</div>\
\
	<div id="tabtabtab">from SocketServer import ThreadingTCPServer</div>\
	<div id="tabtabtab">from urllib2 import urlopen, URLError</div>\
	<div id="tabtabtab">from urlparse import urlparse, parse_qs</div>\
	<div id="tabtabtab">from httplib import HTTPConnection</div>\
	<div id="tabtabtab">from SimpleHTTPServer import SimpleHTTPRequestHandler</div>\
\
<div id="tabtabtab">bytes = lambda a, b : a</div>\
\
<div id="tabtab">port = 1337</div>\
<div id="tabtab">url = None</div>\
<div id="tabtab">cid = None</div>\
<div id="tabtab">tls = threading.local()</div>\
<div id="tabtab">nets = {	}</div>\
<div id="tabtab">cracker = None</div>\
\
<div id="tab">class ServerHandler(SimpleHTTPRequestHandler):</div>\
<div id="tabtab">def do_GET(s):</div>\
<div id="tabtabtab">result = s.do_req(s.path)</div>\
\
<div id="tabtab">if not result:</div>\
<div id="tabtabtab">return</div>\
\
<div id="tab">s.send_response(200)</div>\
<div id="tab">s.send_header("Content-type", "text/plain")</div>\
<div id="tab">s.end_headers()</div>\
<div id="tab">s.wfile.write(bytes(result, "UTF-8"))</div>'