import { Bell } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllNotifications } from "@/services/notification/getAllNotifications";
import {
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "@/services/notification/readNotification";

interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
  notificationId: string;
}

function Notification() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: getAllNotifications,
  });

  const markAsReadMutation = useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  const markAllAsReadMutation = useMutation({
    mutationFn: markAllNotificationsAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const notifications = data?.notifications || [];
  const unreadCount = notifications.filter((n: Notification) => !n.read).length;

  console.log(notifications);
  console.log(unreadCount);
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <Bell />
          {unreadCount > 0 && (
            <span className="badge badge-sm indicator-item">{unreadCount}</span>
          )}
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-section-bg z-1 mt-3 w-80 shadow"
      >
        <div className="card-body p-0">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-bold">알림</span>
            {unreadCount > 0 && (
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => markAllAsReadMutation.mutate()}
              >
                전체 읽음
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                알림이 없습니다
              </div>
            ) : (
              // 단일 알람 지우기 찾기
              notifications.map((notification: Notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b group relative ${
                    !notification.read
                      ? "bg-button-bg-second"
                      : "bg-section-bg hover:bg-button-bg-second/50"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(notification.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <>
                          <span className="badge badge-primary badge-sm">
                            New
                          </span>
                          <button
                            className="btn btn-ghost btn-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.stopPropagation();
                              markAsReadMutation.mutate(
                                notification.notificationId
                              );
                            }}
                          >
                            읽음
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
