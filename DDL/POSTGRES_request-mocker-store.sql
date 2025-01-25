create table if not exists mocker.request_mocker_store (
    
    id              uuid,
    uri             text,
    method          varchar(10),
    mocker_type     varchar(10),
    mocker_data     jsonb,

    constraint request_mocker_pk primary key (uri, method)
);

create index if not exists mocker.request_mocker_idx on mocker.request_mocker_store (id);