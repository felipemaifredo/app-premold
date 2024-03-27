const linkToFetch = "https://formsubmit.co/felipemaifredo@gmail.com"

export async function fetchSendEmail(formData) {
    try {
        const response = await fetch(linkToFetch, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _captcha: "false",
                _subject: `Novo Contato no Site, ${formData.subject}`,
                Nome: formData.name,
                phone: formData.phone,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            })
        })

        if (response.ok) {
            return "200"
        } else {
            throw new Error("Erro ao enviar email")
        }
    } catch (error) {
        throw error
    }
}