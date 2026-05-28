import type { NotificationFormData } from "@/Validation/notifications";

type NtfyNotificationFormData = Extract<NotificationFormData, { type: "ntfy" }>;

export const dropStaleAuth = (
	data: NtfyNotificationFormData
): NtfyNotificationFormData => {
	const authType = data.authType ?? "none";
	const base = { ...data, authType };
	switch (authType) {
		case "none":
			return { ...base, username: "", password: "", accessToken: "" };
		case "basic":
			return { ...base, accessToken: "" };
		case "bearer":
			return { ...base, username: "", password: "" };
		default:
			return base;
	}
};
