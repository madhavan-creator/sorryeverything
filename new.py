import http.server
import webbrowser


PORT = 8000


class MyServer(
    http.server.SimpleHTTPRequestHandler
):

    pass


server = http.server.ThreadingHTTPServer(
    ("", PORT),
    MyServer
)


url = (
    f"http://localhost:{PORT}/index.html"
)


print()
print("╔══════════════════════════════╗")
print("║       💜 SORRY LOVE 💜       ║")
print("╚══════════════════════════════╝")
print()

print("Website started!")
print()

print("Open:")
print(url)

print()


webbrowser.open(url)


try:

    server.serve_forever()

except KeyboardInterrupt:

    print()
    print("Website stopped.")

    server.server_close()