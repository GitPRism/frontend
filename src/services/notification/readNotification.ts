import apiClient from "../apiClient";

export const markNotificationAsRead = async (notificationId: string) => {
  const response = await apiClient.patch(
    `/api/v1/notifications/${notificationId}/read`
  );
  return response.data;
};

export const markAllNotificationsAsRead = async () => {
  const response = await apiClient.patch("/api/v1/notifications/read-all");
  return response.data;
};
