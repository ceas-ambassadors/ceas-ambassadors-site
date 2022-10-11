export interface Event{
id: number,
title: string,
start_time: Date,
end_time: Date,
description: string,
location: string,
public: boolean,
meeting: boolean,
is_disabled: boolean,
createdAt: Date,
updatedAt: Date,
created_by: number
}