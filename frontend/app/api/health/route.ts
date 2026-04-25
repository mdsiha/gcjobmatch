export async function GET() {
    try {
        const response = await fetch("http://localhost:8000/health")
        const data = await response.json()
        return Response.json({ frontend: "ok", backend: data.status })
    } catch {
        return Response.json({ frontend: "ok", backend: "Unreachable" }, { status: 503 })
    }
}